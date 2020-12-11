# Theming

Elastic UI React Native provides a powerful theming system to fully customize existing components and build custom components which automatically integrate with the library.

### Theme Provider

- import

```js
import { ThemeProvider } from '@elasticui/react-native';
```

- usage

```jsx
<ThemeProvider>
  <App>
</ThemeProvider>
```

### useTheme

- import

```js
import { useTheme } from '@elasticui/react-native';
```

- usage

```jsx
const theme = useTheme();
```

### withTheme

- import

```js
import { withTheme } from '@elasticui/react-native';
```

- usage

```jsx
export default withTheme(Component);
```

### makeStyles

- import

```js
import { makeStyles } from '@elasticui/react-native';
```

- usage

```jsx
const styles = useStyles();

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.platte.primary,
  },
}));
```
