import { InjectionToken } from '@angular/core';
import { Moment, MomentInput, MomentFormatSpecification, utc } from 'moment';
import * as moment from 'moment';

export interface MomentFactory {
  (): Moment;
}

const factory = (): MomentFactory => moment;

export const MOMENT = new InjectionToken<MomentFactory>('MomentFactory', { providedIn: 'root', factory });
