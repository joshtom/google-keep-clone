import React from 'react'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';


export  const SidebarData = [
    {
        title: 'Notes',
        icon: <LightbulbIcon />,
        link: '/notes'
    },
    {
        title: 'Reminders',
        icon: <NotificationsNoneIcon />,
        link: '/reminders'
    },
    {
        title: 'Edit labels',
        icon: <EditIcon />,
        link: '/notes'
    },
    {
        title: 'Archive',
        icon: <ArchiveIcon />,
        link: '/archive'
    },
    {
        title: 'Trash',
        icon: <DeleteIcon/>,
        link: '/trash'
    }
] 
  
