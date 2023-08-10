## react 项目案例-汉堡侠

### 函数式组件和 css module，结合 antd 组件库开发项目

- `useState` 为组件添加状态
- `useContext` 向组件树深层传递数据
- 使用方式一： 1.引入 `context` 2.使用 `Xxx.Consumer` 组件来创建元素
  `Consumer` 的标签体需要一个回调函数
  它会将 `context` 设置为回调函数的参数，通过参数就可以访问到 `context` 中存储的数据

```jsx
const A = () => {
  return (
    <TestContext.Consumer>
      {(ctx) => {
        return (
          <div>
            {ctx.name} - {ctx.age}
          </div>
        )
      }}
    </TestContext.Consumer>
  )
}
```

- 使用 `Context` 方式二： 1.导入 Context 2.使用钩子函数 `useContext()`获取到 `context`
  `useContext()` 需要一个 `Context` 作为参数
  它会将 Context 中数据获取并作为返回值返回

  Xxx.`Provider` - 表示数据的生产者，可以使用它来指定 `Context` 中的数据 - 通过 `value` 来指定 Context 中存储的数据，
  这样一来，在该组件的所有的子组件中都可以通过 `Context` 来访问它所指定数据

  当我们通过 `Context` 访问数据时，他会读取离他最近的 `Provider` 中的数据，
  如果没有 `Provider`，则读取 `Context` 中的默认数据

```jsx
const B = () => {
  // 使用钩子函数获取Context
  const ctx = useContext(TestContext)

  return (
    <div>
      {ctx.name} -- {ctx.age}
    </div>
  )
}
```

- `useEffect` 解决组件产生的副作用
