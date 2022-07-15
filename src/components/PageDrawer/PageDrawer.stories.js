import PageDrawer from './PageDrawer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/PageDrawer',
    component: PageDrawer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PageDrawer {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
    open: true,
    children: <div>PageDrawer. Toggle 'open' below to open and close drawer</div>,
    onClose: () => null,
}
