import { Debug } from '../core/debug.js';

import { Vec3 } from '../math/vec3.js';
import { Mat4 } from '../math/mat4.js';

/** @typedef {import('./manager.js').SoundManager} SoundManager */

/**
 * Represents an audio listener - used internally.
 *
 * @ignore
 */
class Listener {
    /**
     * Create a new listener instance.
     *
     * @param {SoundManager} manager - The sound manager.
     */
    constructor(manager) {
        /**
         * @type {SoundManager}
         * @private
         */
        this._manager = manager;

        /**
         * @type {Vec3}
         * @private
         */
        this.position = new Vec3();
        /**
         * @type {Vec3}
         * @private
         */
        this.velocity = new Vec3();
        /**
         * @type {Mat4}
         * @private
         */
        this.orientation = new Mat4();

        // update listener position once renderer has been set up
        this.atmokyListener = null;
        this._manager.setupComplete.then(() => {
            console.log("setup complete")
            this.atmokyListener = this._manager.renderer.listener;
            this.atmokyListener.setPosition(-this.position.z, -this.position.x, this.position.y);

            const q = this.orientation.getQuaternion();
            this.atmokyListener.setRotationQuaternion(q.w, -q.z, -q.x, -q.y);
        });
    }

    /**
     * Get the position of the listener.
     *
     * @returns {Vec3} The position of the listener.
     */
    getPosition() {
        return this.position;
    }

    /**
     * Set the position of the listener.
     *
     * @param {Vec3} position - The new position of the listener.
     */
    setPosition(position) {
        this.position.copy(position);
        if (this.atmokyListener) {
            this.atmokyListener.setPosition(-position.z, -position.x, position.y)
        }
    }

    /**
     * Get the velocity of the listener.
     *
     * @returns {Vec3} The velocity of the listener.
     * @deprecated
     */
    getVelocity() {
        Debug.warn('Listener#getVelocity is not implemented.');
        return this.velocity;
    }

    /**
     * Set the velocity of the listener.
     *
     * @param {Vec3} velocity - The new velocity of the listener.
     * @deprecated
     */
    setVelocity(velocity) {
        Debug.warn('Listener#setVelocity is not implemented.');
    }

    /**
     * Set the orientation matrix of the listener.
     *
     * @param {Mat4} orientation - The new orientation matrix of the listener.
     */
    setOrientation(orientation) {
        this.orientation.copy(orientation);

        if (this.atmokyListener) {
            const q = this.orientation.getQuaternion();
            this.atmokyListener.setRotationQuaternion(q.w, -q.z, -q.x, q.y);
        }
    }

    /**
     * Get the orientation matrix of the listener.
     *
     * @returns {Mat4} The orientation matrix of the listener.
     */
    getOrientation() {
        return this.orientation;
    }

    /**
     * Get the listener.
     *
     * @type {AudioListener|null}
     */
    get listener() {
        const context = this._manager.context;
        return context ? context.listener : null;
    }
}

export { Listener };
