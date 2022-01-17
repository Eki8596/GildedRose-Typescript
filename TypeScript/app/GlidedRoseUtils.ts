import {Item} from "@/gilded-rose";


/**
 * Gets new quantity for ticket types
 * **/
export function getNewBackstageItemQuality(item: Item) {

  if (item.quality < 50 && item.sellIn > 0) {
    item.quality = item.sellIn < 6 ? item.quality + 3 : item.sellIn < 11 ? item.quality + 2 : item.quality + 1;
    item.quality = roundQuality(item.quality);
  }

  return item.sellIn <= 0 ? 0 : item.quality;
}


/**
 * Gets new quantity for generic items
 * **/
export function getNewGenericItemQuality(item: Item) {

  if (item.quality > 0) {
    item.quality = item.sellIn <= 0 ? item.quality - 2 : item.quality - 1;
    item.quality = roundQuality(item.quality);
  }

  return item.quality;
}

/**
 * Gets new quantity for conjured types
 * **/
export function getNewConjuredItemQuality(item: Item) {

  if (item.quality > 0) {
    item.quality = item.sellIn <= 0 ? item.quality - 4 : item.quality - 2;
    item.quality = roundQuality(item.quality);
  }

  return item.quality;
}

/**
 * Gets new quantity for firelords hammer (sulfuras)
 * **/
export function getNewSulfurasItemQuantity(item: Item) {
  return item.quality;
}

/**
 * Gets new quantity for bria type
 * **/
export function getNewAgedBriQuality(item: Item) {

  if (item.quality < 50) {
    item.quality = item.sellIn <= 0 ? item.quality + 2 : item.quality + 1;
    item.quality = roundQuality(item.quality);
  }

  return item.quality;
}


function roundQuality(quality) {
  return quality < 0 ? 0 : quality > 50 ? 50 : quality;
}


