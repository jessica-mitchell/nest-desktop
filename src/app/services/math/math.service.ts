import { Injectable } from '@angular/core';

import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  fill(value: number, size: number): number[] {
    return Array.from({ length: size }, () => value);
  }

  range(start: number, end: number = null, step: number = null): number[] {
    if (!end) {
      return Array.from({ length: start }, (val, index) => index);
    } if (!step) {
      return Array.from({ length: end - start }, (val, index) => start + index);
    } else {
      return Array.from({ length: Math.ceil((end - start) / step) }, (val, index) => start + (index * step));
    }
  }

  linspace(start: number, end: number, size: number): number[] {
    var step = (end - start) / (size - 1);
    return this.range(start, end + step, step)
  }

  randomInt(min: number, max: number): number {
    var range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }

  randomUniformInt(start: number, end: number, size: number): number[] {
    return Array.from({ length: size }, () => this.randomInt(start, end));
  }

  randomUniformFloat(min: number, max: number, size: number): number[] {
    return Array.from({ length: size }, () => d3.randomUniform(min, max)());
  }

  randomNormal(mu: number, sigma: number, size: number): number[] {
    return Array.from({ length: size }, () => d3.randomNormal(mu, sigma)());
  }

  onlyUnique(values: number[], index: number, self): boolean {
    return self.indexOf(values) === index;
  }

  extent(values: number[]): number[] {
    return d3.extent(values)
  }

  mean(values: number[]): number {
    return d3.mean(values)
  }

  deviation(values: number[]): number {
    return d3.mean(values)
  }

}
