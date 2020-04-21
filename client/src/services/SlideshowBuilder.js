'use strict';
import Tools from './Tools';

class SlideshowBuilder {
  /**
   * Construct the slideshow.
   *
   * @constructor
   * @param {String[][]} rows Array of rows, comprised of array of column values
   * @param {String} colname The name of the column that is used to create the slideshow items
   * @param {Object} config Configuration object
   * @param {Boolean} [config.shuffled=true] Shuffle the slideshow results.
   * @param {Object} [config.structure={}] Definition for the spreadsheet column structure
   *  If false, the order will be deterministic, based on the order of the
   *  rows in the spreadsheet.
   */
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

  /**
   * Collect the slides from the row array
   * @param {String[][]} rows
   */
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

  /**
   * Get the slide definition as an object with the key represneting
   * the column name, and the value holding the items
   */
  getSlides() {
    return this.slides;
  }

  /**
   * Get the index of the column within the rows, based on its
   * symbolic name from the given structure definition.
   *
   * @param {string} colName Column name
   * @returns {Number} Index of the column in the row array
   */
  getColumnIdByName(colName = '') {
    return this.columnNames.indexOf(colName);
  }
}

export default SlideshowBuilder;
