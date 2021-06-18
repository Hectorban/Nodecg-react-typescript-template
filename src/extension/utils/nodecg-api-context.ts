import {NodeCG} from '../../types/nodecgServer';

let context: NodeCG;
// With this module we set a context api so every module can access nodecg's api easily
export function get(): NodeCG {
	return context;
}

export function set(ctx: NodeCG): void {
	context = ctx;
}