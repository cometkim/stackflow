import type { AggregateOutput } from "../AggregateOutput";
import type {
  PoppedEvent,
  PushedEvent,
  ReplacedEvent,
  StepPoppedEvent,
  StepPushedEvent,
  StepReplacedEvent,
} from "../event-types";
import type { BaseDomainEvent } from "../event-types/_base";
import type { DispatchEvent } from "../event-utils";

export type StackflowActions = {
  /**
   * Push new activity
   */
  push: (params: Omit<PushedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Push new activity in the top and remove current top activity when new activity is activated
   */
  replace: (params: Omit<ReplacedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Remove top activity
   */
  pop: (params?: Omit<PoppedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Push new step in current activity
   */
  stepPush: (params: Omit<StepPushedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Replace current step in current activity
   */
  stepReplace: (params: Omit<StepReplacedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Remove current step
   */
  stepPop: (params?: Omit<StepPoppedEvent, keyof BaseDomainEvent>) => void;

  /**
   * Get current stack state
   */
  getStack: () => AggregateOutput;

  /**
   * Dispatch new event to the core without pre-effect hooks
   */
  dispatchEvent: DispatchEvent;
};
