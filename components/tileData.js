// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemText >Mypage</ListItemText>
        </ListItem>

        <ListItem button>
            <ListItemText>新たにメッセージを書く</ListItemText>
        </ListItem>

        <ListItem button>
            <ListItemText>SignOut</ListItemText>
        </ListItem>
    </div>
);

