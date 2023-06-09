import 'core-js/stable';
import 'regenerator-runtime/runtime';

class LightboxStore {
  constructor() {
    this.state = {
      images: {},
      index: false,
      group: false,
    };
  }

  addImage(url, group) {
    if (this.state.images[group] === undefined) {
      this.state.images[group] = [];
      this.state.group = 'default';
    } else {
      this.state.group = group;
    }
    return this.state.images[group].push(url) - 1;
  }

  remove(url, group) {
    this.state.images[group] = this.state.images[group].filter(
      (image) => image !== url
    );
  }

  open(url, group) {
    this.state.group = group;
    this.state.index = this.state.images[group].findIndex(
      (image) => image === url
    );
  }

  close() {
    this.state.index = false;
  }

  next() {
    this.state.index++;
    if (this.state.index >= this.state.images[this.state.group].length) {
      this.state.index = 0;
    }
  }

  prev() {
    this.state.index--;
    if (this.state.index < 0) {
      this.state.index = this.state.images[this.state.group].length - 1;
    }
  }
}

export default new LightboxStore();
