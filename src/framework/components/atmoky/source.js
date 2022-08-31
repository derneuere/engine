import { Component } from "../component.js";
import { ComponentSystem } from "../system.js";

/**
 *
 * @augments Component
 */
class AtmokySource extends Component {
  constructor(system, entity) {
    // eslint-disable-line no-useless-constructor
    super(system, entity);
  }
}

class AtmokySourceData {
  constructor() {}
}

const _schema = ["enabled"];

/**
 * Component System for adding and removing {@link AtmokySource} objects to Entities.
 *
 * @augments ComponentSystem
 * @ignore
 */
class AtmokySourceSystem extends ComponentSystem {
  /**
   * @hideconstructor
   */
  constructor(app) {
    super(app);
    this.id = "atmokysource";
    this.ComponentType = AtmokySource;
    this.DataType = AtmokySourceData;
  }

  initializeComponentData(component, data, properties) {
    properties = ["enabled"];

    super.initializeComponentData(component, data, properties);
  }
}

Component._buildAccessors(AtmokySourceSystem.prototype, _schema);

export { AtmokySource, AtmokySourceSystem, AtmokySourceData };
