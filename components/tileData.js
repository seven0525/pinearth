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
import { Link } from '../routes';


export const mailFolderListItems = (
    <div>
        <ListItem button>
            <Link route="/users/mypage">
                <a>
            <ListItemText >Mypage</ListItemText>
                </a>
            </Link>
        </ListItem>



        <ListItem button>
            <Link route="/messages/new">
                <a>
            <ListItemText>新たにメッセージを書く</ListItemText>
                </a>
            </Link>
        </ListItem>

        <ListItem button>
            <Link route="">
                <a>
            <ListItemText>SignOut</ListItemText>
                </a>
            </Link>
        </ListItem>
    </div>
);

