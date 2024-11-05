import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { PaginationResponse } from './common-type';
import { PaginationQueryDTO } from './dto/PaginationQueryDto';

@Injectable()
export class CommonService {
  async paginate<T>(
    model: Model<T>,
    query: PaginationQueryDTO,
    filterQuery: FilterQuery<T> = {},
    populateOptions: string[] = [],
  ): Promise<T[] | PaginationResponse<T>> {
    const sortBy = query.sortBy || 'createdAt';
    const order = query.order === 'desc' ? -1 : 1;

    // 페이지네이션을 사용하지 않는 경우
    // if (!query.page && !query.limit) {
    //   return model
    //     .find(filterQuery)
    //     .sort({ [sortBy]: order })
    //     .populate(populateOptions);
    // }

    // 페이지네이션을 사용하는 경우
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
}
