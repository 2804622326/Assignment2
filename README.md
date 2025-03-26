# Assignment2
下面是一份综合指导笔记，总结了你项目中三个关键文件（App.js、HomeScreen.js、ResultScreen.js）的核心结构、功能和实现逻辑，方便你日后开发和调试时参考：

⸻

Guidance Notes for the IS6144 Mock String App

1. Project Overview
	•	目标：构建一个简单的字符串操作应用。用户在首页输入一个字符串，应用会将该字符串进行反转操作，并在结果页显示结果。
	•	主要功能：
	•	输入字符串并实时处理（反转）。
	•	在同一页面显示操作结果。
	•	通过 React Navigation 在两个页面之间传递数据。

⸻

2. File Structure and Roles

App.js
	•	作用：设置整个应用的导航架构。
	•	主要内容：
	•	引入 NavigationContainer 和 createStackNavigator。
	•	定义 Stack Navigator，设置初始路由为 "Home"。
	•	注册两个页面：
	•	HomeScreen：标题为 “IS6144 Mock String App”。
	•	ResultScreen：标题为 “Result Screen”。
	•	关键代码：

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "IS6144 Mock String App" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Result Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



HomeScreen.js
	•	作用：提供字符串输入、处理和导航至结果页。
	•	主要内容：
	•	状态管理：使用 React useState 分别管理 inputText 和 manipulatedText。
	•	事件处理：
	•	handleChangeText：实时记录用户输入并打印日志。
	•	handleStringManipulation：将输入的字符串反转，并存储到 manipulatedText 中。
	•	goToResultScreen：先执行字符串处理，再通过导航传递处理后的字符串给 ResultScreen。
	•	UI 布局：包含标题、TextInput、按钮及条件渲染的结果展示。
	•	关键代码：

const handleStringManipulation = () => {
  const reversed = inputText.split('').reverse().join('');
  setManipulatedText(reversed);
};

const goToResultScreen = () => {
  handleStringManipulation();
  navigation.navigate('Result', { finalString: manipulatedText });
};

注意：在 goToResultScreen 中需要确保处理结果已更新后再传递，否则可能传递旧值。

ResultScreen.js
	•	作用：接收并显示传递过来的字符串操作结果。
	•	主要内容：
	•	从 route.params 中获取 finalString 参数。
	•	显示一个标题和最终字符串结果。
	•	包含返回按钮，让用户可以返回上一个页面。
	•	关键代码：

const { finalString } = route.params || { finalString: "" };

return (
  <View style={styles.container}>
    <Text style={styles.title}>Result Screen</Text>
    <Text style={styles.result}>
      The manipulated string is: {finalString}
    </Text>
    <Button title="Go Back" onPress={() => navigation.goBack()} />
  </View>
);



⸻

3. Navigation Flow and Data Passing
	•	启动：App 启动后，NavigationContainer 初始化并加载 HomeScreen（初始路由为 “Home”）。
	•	操作：用户在 HomeScreen 输入字符串，点击“Manipulate String”按钮时，触发字符串反转操作，并在页面显示结果。
	•	跳转：点击“Go to Result Screen”后，应用调用 navigation.navigate 将 manipulatedText 作为参数传递给 ResultScreen。
	•	展示：ResultScreen 读取传递的参数，并展示反转后的字符串，用户可点击“Go Back”返回 HomeScreen。

⸻

4. Testing and Debugging Tips
	•	检查状态更新：确认在调用 goToResultScreen 之前，manipulatedText 已经更新。可考虑将字符串处理逻辑直接嵌入 goToResultScreen 里，或者使用回调确保同步更新。
	•	导航验证：在 HomeScreen 中确保 navigation.navigate 的页面名称与 App.js 中注册的名称完全匹配（区分大小写）。
	•	样式调试：检查 StyleSheet 定义是否正确，确保页面布局和组件对齐符合预期。
	•	日志调试：利用 console.log 输出状态变化，帮助确定输入与结果之间的正确转换。

⸻

5. 常见问题
	•	数据传递延迟：由于 setState 异步更新，确保数据在页面跳转前是最新的。
	•	导航名称错误：确保在 App.js 中的 Stack.Screen 名称与 HomeScreen 中的调用一致（如 “Home” 和 “Result”）。
	•	未加载依赖：如果遇到模块找不到问题，请检查 @react-navigation/native 等依赖是否已正确安装。

⸻
