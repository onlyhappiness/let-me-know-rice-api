import { Injectable } from '@nestjs/common';
import { FilterQuery, Model, Types } from 'mongoose';
import { InfiniteScrollResponse, PaginationResponse } from './common-type';
import { CursorQueryDTO } from './dto/CursorQueryDto';
import { PaginationQueryDTO } from './dto/PaginationQueryDto';

@Injectable()
export class CommonService {
  /**
   * pagination
   */
  async paginate<T>(
    model: Model<T>,
    query: PaginationQueryDTO,
    filterQuery: FilterQuery<T> = {},
    populateOptions: string[] = [],
  ): Promise<T[] | PaginationResponse<T>> {
    const sortBy = query.sortBy || 'createdAt';
    const order = query.order === 'desc' ? -1 : 1;

    const page = query.page || 1;
    const limit = query.limit || 10;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      model
        .find(filterQuery)
        .sort({ [sortBy]: order })
        .skip(skip)
        .limit(limit)
        .populate(populateOptions),
      model.countDocuments(filterQuery),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  /**
   * infinite scroll
   */
  async infiniteScroll<T>(
    model: Model<T>,
    query: CursorQueryDTO,
    filterQuery: FilterQuery<T> = {},
    populateOptions: string[] = [],
  ): Promise<T[] | InfiniteScrollResponse<T>> {
    const sortBy = query.sortBy || '_id';
    const order = query.order === 'desc' ? -1 : 1;
    const limit = query.limit || 10;

    // cursor가 없는 경우 첫 페이지 반환
    if (!query.cursor) {
      const items = await model
        .find(filterQuery)
        .sort({ [sortBy]: order })
        .limit(limit + 1) // 다음 페이지 존재 여부 확인을 위해 1개 더 가져옴
        .populate(populateOptions);

      const hasMore = items.length > limit;
      const results = hasMore ? items.slice(0, -1) : items;

      return {
        items: results,
        meta: {
          nextCursor: hasMore
            ? results[results.length - 1]['_id'].toString()
            : null,
          hasMore,
          limit,
        },
      };
    }

    // cursor가 있는 경우 다음 페이지 반환
    const cursorFilter = {
      ...filterQuery,
      _id: {
        [order === 1 ? '$gt' : '$lt']: new Types.ObjectId(query.cursor),
      },
    };

    const items = await model
      .find(cursorFilter)
      .sort({ [sortBy]: order })
      .limit(limit + 1)
      .populate(populateOptions);

    const hasMore = items.length > limit;
    const results = hasMore ? items.slice(0, -1) : items;

    return {
      items: results,
      meta: {
        nextCursor: hasMore
          ? results[results.length - 1]['_id'].toString()
          : null,
        hasMore,
        limit,
      },
    };
  }
}
