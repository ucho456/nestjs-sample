import { Injectable } from '@nestjs/common';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll() {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((i) => i.id === id);
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
