import { Component } from "../component.js";
import { ComponentSystem } from "../system.js";

/**
 *
 * @augments Component
 */
class AtmokyManager extends Component {
  constructor(system, entity) {
    // eslint-disable-line no-useless-constructor
    super(system, entity);
  }
}
class AtmokyManagerData {
  constructor() {}
}

const _schema = ["enabled"];

/**
 * Component System for adding and removing {@link AtmokyManager} objects to Entities.
 *
 * @augments ComponentSystem
 * @ignore
 */
class AtmokyManagerSystem extends ComponentSystem {
  /**
   * @hideconstructor
   */
  constructor(app) {
    super(app);
    this.id = "atmokymanager";
    this.ComponentType = AtmokyManager;
    this.DataType = AtmokyManagerData;
  }

  initializeComponentData(component, data, properties) {
    properties = ["enabled"];

    super.initializeComponentData(component, data, properties);
  }
}

Component._buildAccessors(AtmokyManagerSystem.prototype, _schema);

export { AtmokyManager, AtmokyManagerSystem, AtmokyManagerData };
