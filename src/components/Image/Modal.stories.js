import Image from './Image'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Image',
    component: Image,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})
Default.args = {
    src: 'https://dwu26uvbjm2sv.cloudfront.net/homepage/influencers/ida-warg/influencer.webp',
    borderRadius: 0,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Loading = Template.bind({})
Loading.args = {
    src: null,
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const FallbackProfile = Template.bind({})
FallbackProfile.args = {
    src: '',
    fallbackType: 'profile',
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const FallbackContent = Template.bind({})
FallbackContent.args = {
    src: '',
    fallbackType: 'contentV1',
}
