export interface DataItem {
    name: string;
    value: string;
    icon? : any;
    color? : string;
    profit?: number;
}
import {IconBedFlatFilled,IconSearch,IconSettingsFilled,IconUserFilled,IconBellFilled} from "@tabler/icons-react"
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


export const data: DataItem[] = [
    {
        name: 'Bookings',
        value: '556',
        profit: 47,
        color : 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        icon : IconBedFlatFilled
    },
    {
        name: "Today's Users",
        value: '1,504',
        profit: 4,
        color : 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',       
        icon : BarChartIcon 
    },
    {
        name: 'Revenue',
        value: '46k',
        profit: 1,
        color : 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
        icon: PaidIcon
    },
    {
        name: 'Followers',
        value: '+75',
        color : 'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))',
        icon:PersonAddIcon
    }
];
