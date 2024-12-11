# plugin-chart-paulz-table

This is the Plugin Chart Paulz Table Superset Chart Plugin.

### Usage

To build the plugin, run the following commands:

```
npm ci
npm run build
```

Alternatively, to run the plugin in development mode (=rebuilding whenever changes are made), start the dev server with the following command:

```
npm run dev
```

To add the package to Superset, go to the `superset-frontend` subdirectory in your Superset source folder (assuming both the `plugin-chart-paulz-table` plugin and `superset` repos are in the same root directory) and run
```
npm i -S ../../plugin-chart-paulz-table
```

If your Superset plugin exists in the `superset-frontend` directory and you wish to resolve TypeScript errors about `@superset-ui/core` not being resolved correctly, add the following to your `tsconfig.json` file:

```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

You may also wish to add the following to the `include` array in `tsconfig.json` to make Superset types available to your plugin:

```
"../../types/**/*"
```

Finally, if you wish to ensure your plugin `tsconfig.json` is aligned with the root Superset project, you may add the following to your `tsconfig.json` file:

```
"extends": "../../tsconfig.json",
```

After this edit the `superset-frontend/src/visualizations/presets/MainPreset.js` and make the following changes:

```js
import { PluginChartPaulzTable } from 'plugin-chart-paulz-table';
```

to import the plugin and later add the following to the array that's passed to the `plugins` property:
```js
new PluginChartPaulzTable().configure({
    key: 'plugin-chart-paulz-table',
}),
```

After that the plugin should show up when you run Superset, e.g. the development server:

```
npm run dev-server
```
