import { Component, ReactNode, RefObject } from "react";
import {
    StyleProp,
    ViewStyle,
    TextStyle,
    GestureResponderEvent
} from "react-native";
import { Dayjs } from "dayjs";

interface IDaySelectionAnimationBorder {
    type: "border";
    duration: number;
    borderWidth?: number;
    borderHighlightColor?: string;
    animType?: any;
    animUpdateType?: any;
    animProperty?: any;
    animSpringDamping?: any;
}

interface IDaySelectionAnimationBackground {
    type: "background";
    duration: number;
    highlightColor: string;
    animType: any;
    animUpdateType: any;
    animProperty: any;
    animSpringDamping: any;
}

interface IDayComponentProps {
    date: any;
    marking: any;
    selected: boolean;
    enabled: boolean;
    showDayName: boolean;
    showDayNumber: boolean;
    onDateSelected: (event: GestureResponderEvent) => void;
    calendarColor: string;
    dateNameStyle: string;
    dateNumberStyle: string;
    weekendDateNameStyle: TextStyle;
    weekendDateNumberStyle: TextStyle;
    highlightDateNameStyle: TextStyle;
    highlightDateNumberStyle: TextStyle;
    disabledDateNameStyle: TextStyle;
    disabledDateNumberStyle: TextStyle;
    markedDatesStyle: TextStyle;
    disabledDateOpacity: number;
    styleWeekend: boolean;
    daySelectionAnimation: TDaySelectionAnimation;
    customStyle: ViewStyle;
    size: number;
    allowDayTextScaling: boolean;
    markedDates: [];
}

type TDaySelectionAnimation =
    | IDaySelectionAnimationBorder
    | IDaySelectionAnimationBackground;

type TDateRange = {
    start: Date | Dayjs;
    end: Date | Dayjs;
};

declare module "react-native-calendar-strip-dayjs" {
    export class CalendarStrip extends Component<{
        style: StyleProp<ViewStyle>;
        innerStyle?: StyleProp<ViewStyle>;
        calendarColor?: string;

        startingDate?: Date | Dayjs;
        selectedDate?: Date | Dayjs;
        onDateSelected?: (date: Date | Dayjs) => void;
        onWeekChanged?: (date: Date | Dayjs) => void;
        updateWeek?: boolean;
        minDate?: Date | Dayjs;
        maxDate?: Date | Dayjs;
        datesWhitelist?: TDateRange[];
        datesBlacklist?: TDateRange[];

        showMonth?: boolean;
        showDayName?: boolean;
        showDayNumber?: boolean;
        showDate?: boolean;

        leftSelector?: any;
        rightSelector?: any;
        iconLeft?: any;
        iconRight?: any;
        iconStyle?: any;
        iconLeftStyle?: any;
        iconRightStyle?: any;
        iconContainer?: any;

        maxDayComponentSize?: number;
        minDayComponentSize?: number;
        responsiveSizingOffset?: number;

        calendarHeaderContainerStyle?: StyleProp<ViewStyle>;
        calendarHeaderStyle?: StyleProp<TextStyle>;
        calendarHeaderFormat?: string;
        calendarHeaderPosition?: "below" | "above";

        calendarAnimation?: {
            duration: number;
            type: "sequence" | "parallel";
        };
        daySelectionAnimation?: TDaySelectionAnimation;

        customDatesStyles?: any[];

        dayComponent?: (props: IDayComponentProps) => ReactNode;

        dateNameStyle?: StyleProp<TextStyle>;
        dateNumberStyle?: StyleProp<TextStyle>;
        weekendDateNameStyle?: StyleProp<TextStyle>;
        weekendDateNumberStyle?: StyleProp<TextStyle>;
        highlightDateNameStyle?: StyleProp<TextStyle>;
        highlightDateNumberStyle?: StyleProp<TextStyle>;
        disabledDateNameStyle?: StyleProp<TextStyle>;
        disabledDateNumberStyle?: StyleProp<TextStyle>;
        disabledDateOpacity?: number;
        styleWeekend?: boolean;

        locale?: object;
        shouldAllowFontScaling?: boolean;
        markedDates: any[];
        markedDatesStyle: TextStyle;
        customDatesStyle: any[];
    },
        {}> {
    }
}


