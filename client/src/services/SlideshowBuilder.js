'use strict';
import Tools from './Tools';

class SlideshowBuilder {
  constructor(rows, colname, config = {}) {
    this.structure = config.structure || {};
    this.shuffled = config.shuffled === undefined ? true : !!config.shuffled;
    this.columnNames = Object.keys(this.structure);
    if (this.columnNames.indexOf(colname) === -1) {
      throw new Error(
        colname +
          'is invalid. Requested slideshow must have a valid column name.'
      );
    }

    this.colName = colname;
    this.slides = [];
    this.collectSlides(rows);
  }

  collectSlides(rows) {
    this.slides = [];
    // Collect slides content based on the given column name
    rows.forEach((row) => {
      const contentColumnId = this.getColumnIdByName(this.colName);
      const nameColumnId = this.getColumnIdByName('name');
      if (row[contentColumnId]) {
        this.slides.push({
          content: row[contentColumnId],
          name: row[nameColumnId],
        });
      }
    });
    // Shuffle
    if (this.shuffled) {
      Tools.shuffle(this.slides);
    }
  }

  getSlides() {
    return this.slides;
  }
  getColumnIdByName(colName = '') {
    return this.columnNames.indexOf(colName);
  }
}

export default SlideshowBuilder;
