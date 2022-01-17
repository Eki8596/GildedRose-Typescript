import {
  getNewAgedBriQuality,
  getNewBackstageItemQuality,
  getNewConjuredItemQuality,
  getNewGenericItemQuality, getNewSulfurasItemQuantity
} from "./GlidedRoseUtils";


export class Item {

  private _name: string;
  private _sellIn: number;
  private _quality: number;

  get name(): string {
    return this._name;
  }

  get sellIn(): number {
    return this._sellIn;
  }

  get quality(): number {
    return this._quality;
  }

  set name(value: string) {
    this._name = value;
  }

  set sellIn(value: number) {
    this._sellIn = value;
  }

  set quality(value: number) {
    this._quality = value;
  }

  constructor(name, sellIn, quality) {
    this._name = name;
    this._sellIn = sellIn;
    this._quality = quality;
  }
}

/**
 * Map each different type of item to respective fuinction of updated quantity
 * **/
const updateItemQualityByNameMap = new Map<string, any>([
  ["Sulfuras, Hand of Ragnaros", getNewSulfurasItemQuantity],
  ["Backstage passes to a TAFKAL80ETC concert", getNewBackstageItemQuality],
  ["Aged Brie", getNewAgedBriQuality],
  ["Conjured Mana Cake", getNewConjuredItemQuality]
]);

export class GildedRose {
  protected items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
   * Updates item
   * Calls map for different type of items
   * Else updates item generically
   * **/
  static updateItem(item: Item) {
    if (item?.name && updateItemQualityByNameMap.has(item.name)) {
      item.quality = updateItemQualityByNameMap.get(item.name)(item);
    }else {
      item.quality = getNewGenericItemQuality(item);
    }
    item.sellIn -= 1;
  }

  updateQuality() {
    this.items.forEach((item) => GildedRose.updateItem(item))
    return this.items;
  }
}
