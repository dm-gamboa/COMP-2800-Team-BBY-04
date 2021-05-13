import styled from "styled-components";
import { Drawer } from "antd";

import theme from "../../../context/themes/main";

const { colors } = theme;

const StyledDrawer = styled(Drawer)`
    .ant-drawer-header {
        .ant-drawer-title {
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.primary};

            h1 {
                margin: 0;
                line-height: 1;
                color: ${colors.primary};
            }

            .anticon {
                margin-right: 0.5rem;
                font-size: 1.25rem;
            }
        }
    }

    .sort {
        display: flex;
        width: 100%;

        .ant-radio-button-wrapper {
            flex: 1;

            &:first-of-type {
                border-top-left-radius: 1.5rem;
                border-bottom-left-radius: 1.5rem;
            }

            &:last-of-type {
                border-top-right-radius: 1.5rem;
                border-bottom-right-radius: 1.5rem;
            }

            &.ant-radio-button-wrapper-checked {
                background: ${colors.primary};
                color: #FFF;
                font-weight: bold;
            }

            .anticon {
                margin-right: 0.5rem;
            }
        }
    }
`;

export default StyledDrawer;
