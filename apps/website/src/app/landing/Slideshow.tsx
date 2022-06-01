import { Box, Slide, Stack, useTheme } from '@mui/material';
import React, { ReactElement, ReactNode, useRef, useState } from 'react';

interface DotButtonProps {
    length: number;
    current: number;
    slideFn: (n: number) => void;
}
function DotButton(props: DotButtonProps) {
    const dots: ReactNode[] = [];
    const theme = useTheme();
    const size = (n?: number) => (n ?? 1) * 2 + 'rem';
    const color = theme.palette.primary.contrastText;
    for (let i = 0; i < props.length; i++) {
        const isCurrent = props.current === i;
        const opacity = isCurrent ? '50%' : '25%';
        const nextPage = isCurrent ? props.current + 1 : i;
        dots.push(
            <Stack
                width={size(2)}
                height={size(2)}
                direction="column"
                alignItems="center"
                justifyContent="center"
                onClick={() => props.slideFn(props.current + 1)}
            >
                <Box
                    key={i}
                    border="none"
                    bgcolor={color}
                    borderRadius="50%"
                    width={size()}
                    height={size()}
                    sx={{ opacity }}
                    onClick={() => props.slideFn(nextPage)}
                />
            </Stack>
        );
    }
    return (
        <Stack marginTop={size()} direction="row" spacing={0}>
            {dots}
        </Stack>
    );
}
interface SlideOfShowProps {
    page: string;
}
const SlideOfShow = React.forwardRef<HTMLImageElement, SlideOfShowProps>(
    (props: SlideOfShowProps, ref) => (
        <Box height="100%" width="100%">
            <img
                style={{
                    objectFit: 'cover',
                    overflow: 'hidden',
                    maxWidth: '100%',
                }}
                src={props.page}
                ref={ref}
                alt="todo-img-alt"
                loading="lazy"
            />
        </Box>
    )
);
export interface AppSlideshowProps {
    pages: string[];
}
interface AppSlideshowState {
    pageNumber: number;
    isChecked: boolean;
    aImg: ReactElement<unknown, string>;
    bImg: ReactElement<unknown, string>;
}
export function AppSlideshow(props: AppSlideshowProps) {
    const [state, setState] = useState<AppSlideshowState>({
        pageNumber: 0,
        isChecked: true,
        aImg: <Box height={0} />,
        bImg: <SlideOfShow page={props.pages[0]} />,
    });
    const slideFn = (newPageNumber: number) => {
        const pageNumber: number = newPageNumber % props.pages.length;
        const newImg = <SlideOfShow page={props.pages[pageNumber]} />;
        const isChecked = !state.isChecked;
        const aImg = isChecked ? state.aImg : newImg;
        const bImg = isChecked ? newImg : state.bImg;
        setState({
            pageNumber,
            isChecked,
            aImg,
            bImg,
        });
    };
    const parent = useRef(null);
    const aDir = !state.isChecked ? 'left' : 'right';
    const bDir = state.isChecked ? 'left' : 'right';
    const easing = useTheme().transitions.easing.sharp;
    return (
        <Box height="100%" width="100%">
            <Box position="absolute" ref={parent} height="0" width="100vw" />
            <Box position="absolute" height="100%" width="100%">
                <Slide
                    direction={aDir}
                    in={!state.isChecked}
                    translate={'yes'}
                    easing={easing}
                    timeout={1000}
                    container={parent.current}
                >
                    {state.aImg}
                </Slide>
            </Box>
            <Box position="absolute" height="100%" width="100%">
                <Slide
                    direction={bDir}
                    in={state.isChecked}
                    translate={'yes'}
                    easing={easing}
                    timeout={1000}
                    container={parent.current}
                >
                    {state.bImg}
                </Slide>
            </Box>
            <Box
                position="absolute"
                height="100%"
                width="100%"
                alignItems="center"
                zIndex={2000}
            >
                <Stack direction="column" alignItems="center">
                    <DotButton
                        length={props.pages.length}
                        current={state.pageNumber}
                        slideFn={slideFn}
                    />
                </Stack>
            </Box>
        </Box>
    );
}
