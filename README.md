<h1 align="center">Rocket-UI</h1>

<p align="center">
  <a href="https://bit.cloud/totalsoft_oss/rocket-ui">
    <img width="200" src="rocket-ui/utils/img/rocket.png">
  </a>
</p>

> A set of reusable and composable React components built on top of Material UI core for developing fast and friendly web applications interfaces.
## 👷‍♂️ Usage

Npmrc is npm config file and in order to use our library, you need to configured this file. 
Run ```shell npm config set '@owner:registry' https://node.bit.cloud```. 
This command will add an entry in your root .npmrc file. If it doesn't exist, it will create one.

And then just import the component/s you need in your project and enjoy the experience!

```jsx 
    import React from 'react'
    import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

    const App = () => {
        return (
            <Typography variant='body2' emphasis='bold'>
                "Text"
            </Typography>
        )
    }
```

In order to get the package/s name for the component/s you want to use just go to our [Bit collection](https://bit.cloud/totalsoft_oss/rocket-ui) and navigate to your desired component:

<picture>
<img src ='rocket-ui/utils/img/example.png'>
</picture>

## 🧬 Components structure

Each component is in a section that is appropriate for its purpose. For example, all buttons related components resides in `buttons` folder.
All components has the same files structure. 
We implement and enforce this structure by creating our own component generator, a functionality provided by Bit.
As you will see, all the components and the ones that will be created using the `rocket-generator` template will have the following structure

<picture>
<img src ='rocket-ui/utils/img/generator.png'>
</picture>

* `index.js`                           main file
* `MyComponent.js`                     implementation of the component
* `MyComponent.test.js`                test file of the component
* `MyComponent.docs.mdx`               docs file for the component
* `compositions`                       folder with example files
    * `MyComponent.composition.js`     compositions for simulating the component in different states


## 🔧 Contributing guide

 We use [Bit](https://bit.dev/) for components management and contribution. Bit is an open-source tool for composing component-driven software. 

### - Install bit
Is recommended to use Command Prompt instead of Powershell due to some compatibility issues.
```shell 
npx @teambit/bvm install
```
If any error occurs at installation, please check the [troubleshooting section.](https://bit.dev/docs/reference/using-bvm#troubleshooting)


### - Start local server
After bit is installed successfully, you can clone the repository and use bit functionalities at their fullest.🎆

To get started straight away run in command prompt `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment. When local server is up and running you would see all the components and you can interact with them.

```shell
bit start
```
### - Modify existing components
After changing/fixing the component according to your needs, you should run `bit test` to make sure that all the tests are passing and add more if your changes requires. 
```shell
bit test
```

Also, if a new feature is added, in addition to the tests, an example with the new functionality should also be added. The examples files are in each component directory inside `compositions` directory

After changing the component you need to run `bit compile` in order to have the latest modifications in your UI.

```shell 
bit compile
```

### - Adding a new component
For creating a new component you should use our own component generator, `rocket-generator`, that provides a template which is helpful in implementing a new component.
An example using our template: `bit create rocket-generator components/buttons/my-component`
### - Open pull request
If the change/feature/fix suits your needs and all the tests are passing, the next step is to create a pull request.

You can read more about Bit and other functionalitites that he provides [here.](https://bit.dev/docs/quick-start)

## License
rocket-ui is licensed under the [MIT](LICENSE) license. @TotalSoft