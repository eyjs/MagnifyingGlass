class MagnifyingGlass {
  defaults = {
    wrap: document.querySelector('.wrap'),
    target: document.querySelector('.target'),
    zoom: 1.5,
    status: true,
    width: 200,
    height: 200,
    borderRadius: 100,
    glass: null,
  };
  constructor(option) {
    this.init(option);
    this.attachDom();
  }
  init(option) {
    const mergeObj = Object.assign(this.defaults, option);

    this.wrap = mergeObj.wrap;
    this.target = mergeObj.target;
    this.zoom = mergeObj.zoom;
    this.status = mergeObj.status;
    this.width = mergeObj.width;
    this.height = mergeObj.height;
    this.borderRadius = mergeObj.borderRadius;
    this.glass = null;
  }
  attachDom() {
    try {
      this.parameterValidation();
      this.createGlass();
      this.addEventListener();
    } catch (e) {
      throw new Error(e);
    }
  }
  parameterValidation() {
    // Parameter Validation
    if (this.wrap === null || this.target === null) {
      console.log('MagnifyingGlass.js Error: Wrap or Target element is null');
      return;
    }
    // Parameter Validation
    if (this.target.nodeType != 1 || this.target.tagName !== 'IMG') {
      console.log('MagnifyingGlass.js Error: Target Element is not img element');
      return;
    }
  }
  createGlass() {
    const glass = document.createElement('div');
    const url = this.target.getAttribute('src');

    this.wrap.style.position = 'relative';
    glass.classList.add('magnifier');
    glass.style.display = 'none';
    glass.style.position = 'absolute';
    glass.style.background = `url(${url}) no-repeat`;
    glass.style.backgroundSize = `${this.target.clientWidth * this.zoom}px ${this.target.clientHeight * this.zoom}px`;
    glass.style.width = `${this.width}px`;
    glass.style.height = `${this.height}px`;
    glass.style.borderRadius = `${this.borderRadius}%`;
    glass.style.boxShadow = '0 0 0 3px #666666, 0 0 3px 3px rgba(0, 0, 0, 0.25)';

    this.wrap.append(glass);
    this.glass = glass;
  }
  addEventListener() {
    this.wrap.addEventListener('mousemove', (e) => {
      if (!this.status) return;
      this.magnify(e);
    });
  }
  magnify(e) {
    const wrap = this.wrap;
    const zoom = this.zoom;
    const glass = this.glass;

    let mouseX = e.pageX - wrap.offsetLeft;
    let mouseY = e.pageY - wrap.offsetTop;

    if (mouseX < wrap.offsetWidth && mouseY < wrap.offsetHeight && mouseX > 0 && mouseY > 0) {
      this.fadeIn(glass);
    } else {
      this.fadeOut(glass);
    }
    if (glass.style.display == 'block') {
      let glassX = mouseX - glass.clientWidth / 2;
      let glassY = mouseY - glass.clientHeight / 2;
      let targetX = -(mouseX * zoom - glass.clientWidth / 2);
      let targetY = -(mouseY * zoom - glass.clientHeight / 2);

      glass.style.left = `${glassX}px`;
      glass.style.top = `${glassY}px`;
      glass.style.backgroundPosition = `${targetX}px ${targetY}px`;
    }
  }
  fadeIn(glass) {
    glass.style.display = 'block';
    glass.style.cursor = 'none';
  }
  fadeOut(glass) {
    glass.style.display = 'none';
    glass.style.cursor = 'pointer';
  }
  setZoom(input) {
    this.zoom = input;
    this.glass.style.backgroundSize = `${this.target.clientWidth * this.zoom}px ${
      this.target.clientHeight * this.zoom
    }px `;
  }
  setStatus(state) {
    this.status = state;
  }
  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.glass.style.width = `${this.width}px`;
    this.glass.style.height = `${this.height}px`;
  }
  setTarget(target) {
    this.target = target;
    this.glass.remove();
    this.createGlass();
  }
}