import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';
export declare class ContainerLifeCycle implements ILifeCycle {
    app: Application;
    onReady(): Promise<void>;
}
