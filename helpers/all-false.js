/*
 * Check if all supplied values are false
 *
 * {@allFalse values="dog|cat"}
 *	all false!
 * {:else}
 *	all aren't false!
 * {/allFalse}
 *
 */
'use strict';

module.exports = function(dust) {
	dust.helpers.allFalse = function(chunk, context, bodies, params) {
		if (!params || !params.hasOwnProperty('values')) {
			return;
		}

		var values = context.resolve(params.values).split('|');

		for (var i = 0; i < values.length; i++) {
			if (context.get(values[i])) {
				return chunk.render(bodies.else, context);
			}
		}

		return chunk.render(bodies.block, context);
	};
};
