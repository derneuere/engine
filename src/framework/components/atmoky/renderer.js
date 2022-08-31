import { Component } from "../component.js";
import { ComponentSystem } from "../system.js";

/**
 *
 * @augments Component
 */
class AtmokyRenderer extends Component {
  constructor(system, entity) {
    // eslint-disable-line no-useless-constructor
    super(system, entity);
  }
}

const _schema = ["enabled"];

class AtmokyRendererData {
  constructor() {}
}

/**
 * Component System for adding and removing {@link AtmokySource} objects to Entities.
 *
 * @augments ComponentSystem
 * @ignore
 */
class AtmokyRendererSystem extends ComponentSystem {
  /**
   * @hideconstructor
   */
  constructor(app) {
    super(app);
    this.id = "atmokyrenderer";
    this.ComponentType = AtmokyRenderer;
    this.DataType = AtmokyRendererData;
  }

  initializeComponentData(component, data, properties) {
    properties = ["enabled"];

    super.initializeComponentData(component, data, properties);
  }
}

Component._buildAccessors(AtmokyRendererSystem.prototype, _schema);

export { AtmokyRenderer, AtmokyRendererSystem, AtmokyRendererData };
