import React from 'react';
import glamorous from 'glamorous';
import styled from 'styled-components';
import { css as emotion } from 'emotion';
import { css as glamor } from 'glamor';
import { StyleSheet, css as aphrodite} from 'aphrodite';
import tc, {tachyonsToCss as tcCss, addSkin} from '../tachyons/';
import tachyonsConfig  from '../tachyons/config';
import { addMediaQuery } from '../tachyons/js/mediaQueries';

const GlamorousComponent = glamorous.a({
    ...tc('tc pa3 ba br3 h4 w4 ma3 f3'),
    ...tc('bg-lightest-blue navy b--navy'),
    ...tc('hover-bg-washed-red hover-light-pink hover-b--light-pink'),
    ...tc('bg-mid-gray-m moon-gray-m'),
    //...tc('hover-bg-moon-gray-m hover-mid-gray-m') /* not supported */
});

const StyledComponent = styled.a`
    ${tcCss('tc pa3 ba br3 h4 w4 ma3 f3')}
    ${tcCss('bg-lightest-blue navy b--navy')}
    ${tcCss('hover-bg-washed-red hover-light-pink hover-b--light-pink')}
    ${tcCss('bg-mid-gray-m moon-gray-m')}
`;

const Emotion = () => {
    const className = emotion`${tcCss('tc pa3 ba br3 h4 w4 ma3 f3')}
        ${tcCss('bg-lightest-blue navy b--navy')}
        ${tcCss('hover-bg-washed-red hover-light-pink hover-b--light-pink')}
        ${tcCss('bg-mid-gray-m moon-gray-m')}
    `;

    return <div className={className}>Howdy im Emotion</div>;
};

const Glamor = () => {
    const rule = glamor({
        ...tc('tc pa3 ba br3 h4 w4 ma3 f3'),
        ...tc('bg-lightest-blue navy b--navy'),
        ...tc('hover-bg-washed-red hover-light-pink hover-b--light-pink'),
        ...tc('bg-mid-gray-m moon-gray-m')
    })

    return <div {...rule}>Hola im Glamor</div>;
};

const Aphrodite = () => {
    const prevConfig = tachyonsConfig();
    
    tachyonsConfig({
        pseudo: ""
    });

    const styles = StyleSheet.create({props: {
        ...tc('tc pa3 ba br3 h4 w4 ma3 f3'),
        ...tc('bg-lightest-blue navy b--navy'),
        ...tc('hover-bg-washed-red hover-light-pink hover-b--light-pink'),
        ...tc('bg-mid-gray-m moon-gray-m')
    }});

    const rule = aphrodite(styles.props);

    tachyonsConfig(prevConfig);

    return <div className={rule}>Shalom i'm Aphrodite</div>;
};

const PseudoBefore = glamorous.a({
    ...tc('tc pa3 ba br3 h4 w4 ma3 f3 relative'),
    ...tc('before-absolute before-top-0 before-left-0 before-db before-bg-lightest-blue before-navy before-tc before-f3 before-w-100 before-pt3 before-pb3 before-ba before-b--navy'),
    ...tc('after-absolute after-bottom-0 after-left-0 after-db after-bg-washed-red after-light-pink after-tc after-f3 after-w-100 after-pb3 after-pt3 after-ba after-b--light-pink'),
    ":before": {
        content: "Before",
    },
    ":after": {
        content: "After",
    }
});

const AdditionalSkin = () => {

    addSkin("peach-puff", "#ffdab9");
    addSkin("peru", "peru");

    const Cmp = glamorous.a({
        ...tc('tc pa3 ba br3 h4 w4 ma3 f3'),
        ...tc('tc pa3 ba br3 h4 w4 ma3 f3'),
        ...tc('bg-peach-puff peru b--peru'),
        ...tc('hover-bg-peru hover-peach-puff hover-b--peach-puff'),
        ...tc('bg-red-xs')
    })

    return <Cmp>Additional Colors</Cmp>
}

const Demo = () => {
    return <div>
                <div style={tc("f3 mb3")}>Frameworks Examples</div>    
                    <div style={tc("pa3 bg-black-10 h-100 flex flex-wrap")}>
                    <GlamorousComponent>Hello i'm Glamorous</GlamorousComponent>
                    <StyledComponent>Bonjour i'm Styled Components</StyledComponent>
                    <Emotion/>
                    <Glamor/>
                    <Aphrodite/>
                    <PseudoBefore/>
                    <AdditionalSkin/>
                </div>
            </div>
}

export default Demo;