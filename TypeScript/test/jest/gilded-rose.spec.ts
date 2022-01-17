import {GildedRose, Item} from '@/gilded-rose';


export const itemsGeneric = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Elixir of the Mongoose", 0, 7), //
  new Item("Elixir of the Mongoose", -1, 0), //
  new Item("Elixir of the Mongoose", 0, 50), //
]
export const itemsSulfuras = [
  new Item("Sulfuras, Hand of Ragnaros", 10, 80), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
]

export const itemsAgedBrie = [
  new Item("Aged Brie", 10, 20), //
  new Item("Aged Brie", 0, 7), //
  new Item("Aged Brie", -1, 0), //
  new Item("Aged Brie", 0, 50), //
]

export const itemsBackstage = [
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 31),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
  new Item("Backstage passes to a TAFKAL80ETC concert", 0, 21),
  new Item("Backstage passes to a TAFKAL80ETC concert", -1, 50),
]

export const itemsConjured = [
  new Item("Conjured Mana Cake", 10, 20), //
  new Item("Conjured Mana Cake", 0, 7), //
  new Item("Conjured Mana Cake", -1, 0), //
  new Item("Conjured Mana Cake", 0, 50), //
  new Item("Conjured Mana Cake", 0, 2), //
]

describe('Gilded Rose', () => {
  it('GenericTest', () => {
    const gildedRose = new GildedRose(itemsGeneric);
    const itemsNew = gildedRose.updateQuality();

    expect(itemsNew[0].quality).toBe(19);
    expect(itemsNew[0].sellIn).toBe(9);

    expect(itemsNew[1].quality).toBe(5);
    expect(itemsNew[1].sellIn).toBe(-1);

    expect(itemsNew[2].quality).toBe(0);
    expect(itemsNew[2].sellIn).toBe(-2);

    expect(itemsNew[3].quality).toBe(48);
    expect(itemsNew[3].sellIn).toBe(-1);
  });

  it('SulfurasTest', () => {
    const gildedRose = new GildedRose(itemsSulfuras);
    const itemsNew = gildedRose.updateQuality();

    expect(itemsNew[0].quality).toBe(80);
    expect(itemsNew[0].sellIn).toBe(9);

    expect(itemsNew[1].quality).toBe(80);
    expect(itemsNew[1].sellIn).toBe(-1);

    expect(itemsNew[2].quality).toBe(80);
    expect(itemsNew[2].sellIn).toBe(-2);

    expect(itemsNew[3].quality).toBe(80);
    expect(itemsNew[3].sellIn).toBe(-1);

    expect(itemsNew[4].quality).toBe(80);
    expect(itemsNew[4].sellIn).toBe(-1);
  });

  it('BriaTest', () => {
    const gildedRose = new GildedRose(itemsAgedBrie);
    const itemsNew = gildedRose.updateQuality();

    expect(itemsNew[0].quality).toBe(21);
    expect(itemsNew[0].sellIn).toBe(9);

    expect(itemsNew[1].quality).toBe(9);
    expect(itemsNew[1].sellIn).toBe(-1);

    expect(itemsNew[2].quality).toBe(2);
    expect(itemsNew[2].sellIn).toBe(-2);

    expect(itemsNew[3].quality).toBe(50);
    expect(itemsNew[3].sellIn).toBe(-1);
  });


  it('BackstageTest', () => {
    const gildedRose = new GildedRose(itemsBackstage);
    const itemsNew = gildedRose.updateQuality();

    expect(itemsNew[0].quality).toBe(21);
    expect(itemsNew[0].sellIn).toBe(14);

    expect(itemsNew[1].quality).toBe(50);
    expect(itemsNew[1].sellIn).toBe(14);

    expect(itemsNew[2].quality).toBe(50);
    expect(itemsNew[2].sellIn).toBe(9);

    expect(itemsNew[3].quality).toBe(50);
    expect(itemsNew[3].sellIn).toBe(9);

    expect(itemsNew[4].quality).toBe(33);
    expect(itemsNew[4].sellIn).toBe(9);

    expect(itemsNew[5].quality).toBe(50);
    expect(itemsNew[5].sellIn).toBe(4);

    expect(itemsNew[6].quality).toBe(23);
    expect(itemsNew[6].sellIn).toBe(4);

    expect(itemsNew[7].quality).toBe(50);
    expect(itemsNew[7].sellIn).toBe(4);

    expect(itemsNew[8].quality).toBe(0);
    expect(itemsNew[8].sellIn).toBe(-1);

    expect(itemsNew[9].quality).toBe(0);
    expect(itemsNew[9].sellIn).toBe(-2);

  });

  it('TestConjured', () => {
    const gildedRose = new GildedRose(itemsConjured);
    const itemsNew = gildedRose.updateQuality();

    expect(itemsNew[0].quality).toBe(18);
    expect(itemsNew[0].sellIn).toBe(9);

    expect(itemsNew[1].quality).toBe(3);
    expect(itemsNew[1].sellIn).toBe(-1);

    expect(itemsNew[2].quality).toBe(0);
    expect(itemsNew[2].sellIn).toBe(-2);

    expect(itemsNew[3].quality).toBe(46);
    expect(itemsNew[3].sellIn).toBe(-1);

    expect(itemsNew[4].quality).toBe(0);
    expect(itemsNew[4].sellIn).toBe(-1);
  });


});


