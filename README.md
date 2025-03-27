# Assignment2

以下是一份简洁完整的笔记，来自《Tutorial_3.pdf》中关于 React Native Navigation 的内容，便于开卷考试查阅。citeturn0file0

---

## 1. 导航基础概念
在 React Native 中，我们通常使用 React Navigation（例如 `@react-navigation/native`、`@react-navigation/stack` 等）来管理多个页面（Screen）的跳转。可以把它想象成一本“多章节的书”，`Stack.Navigator` 就是这本书的“目录系统”，各个 Screen 则是不同的“章节”页面。

在实际项目中，通过导航可以让应用在多个界面之间快速切换，为用户提供更清晰的操作流程。

---

## 2. Exercise 1：添加新屏幕（Settings Screen）
**目标**：在现有导航堆栈中添加一个新的 `SettingsScreen`。

**步骤概览**：
1. **创建屏幕组件**（`SettingsScreen.js`）：只需要一个基本布局即可（包含 `View`, `Text` 和一个 `Button`）。
2. **在 App.js 中注册屏幕**：在 `Stack.Navigator` 内部添加一行 `<Stack.Screen name="Settings" component={SettingsScreen} />`。
3. **在 WelcomeScreen 中添加按钮**：通过 `navigation.navigate("Settings")` 跳转到新屏幕。

> 类比来说，创建和注册一个新屏幕就像在“目录”中添加一章新内容，然后从首页（WelcomeScreen）指向该章节（SettingsScreen）即可。

---

## 3. Exercise 2：在屏幕之间传递数据（Dynamic Greeting）
**目标**：让用户在 WelcomeScreen 中输入姓名，并把这个姓名传递到 ProfileScreen 来显示不同的欢迎词。

**步骤概览**：
1. 在 `WelcomeScreen.js` 中添加 `TextInput`，用于获取用户输入的姓名（如存到 `name` 变量）。
2. 当用户点击按钮时，使用以下方式传递参数：
   ```js
   navigation.navigate("Profile", { userName: name });
   ```
3. 在 `ProfileScreen.js` 中使用 `route.params.userName` 获取传递过来的数据，并进行展示。如果没有传入则使用默认值（如 "Guest"）。

> 现实项目中，这种数据传递常用于在“登录/首页”页面输入的信息直接传到下一个“个人中心/详情”页面，比如用户名、ID 等。

---

## 4. Exercise 3：自定义导航选项（Customize Navigation Options）
**目标**：自定义各个屏幕在导航栏（Header）中的显示效果。

**关键配置**：
- 在 `<Stack.Screen>` 中添加 `options` 属性：
  ```js
  options={{
    title: 'Home Screen',
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
  }}
  ```
- 你可以更改标题文字、背景色、文字颜色等；
- 也可以通过设置 `headerShown: false` 来隐藏某些屏幕的导航栏。

> 类比来说，这就像给每个页面设计一个“标题栏样式”：比如“封面页”可能要非常醒目，而一般章节则相对常规。

在实际项目中，为了匹配品牌风格，通常会统一自定义背景色、字体、LOGO 等，以营造一致的用户体验。

---

## 5. Exercise 4：条件式导航流程（Conditional Navigation Flow）
**目标**：根据不同按钮点击，向目标页面传递不同的参数，并在目标页面根据这些参数执行不同的渲染逻辑。

**步骤概览**：
1. 在 WelcomeScreen 中添加两个按钮，比如一个跳转到 Profile，另一个跳转到 Settings，并分别传递不同的 `role` 参数：
   ```js
   navigation.navigate("Profile", { userName: name, role: 'profile' });
   navigation.navigate("Settings", { userName: name, role: 'settings' });
   ```
2. 在目标页面（如 `ProfileScreen`）根据 `route.params.role` 进行条件渲染（比如三元运算符 `role === 'profile' ? ... : ...`）。

> 现实项目中，这种机制常见于不同角色的权限控制，比如管理员与普通用户点击同一个“设置”按钮，进入页面后可以看到不同的内容或操作选项。


