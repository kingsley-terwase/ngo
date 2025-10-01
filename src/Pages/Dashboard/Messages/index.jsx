import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    IconButton,
    Avatar,
    Badge,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    InputAdornment,
    Chip,
    AppBar,
    Toolbar,
    Switch,
    FormControlLabel,
    Fade,
    Zoom,
} from '@mui/material';
import {
    Send as SendIcon,
    Search as SearchIcon,
    MoreVert as MoreVertIcon,
    Phone as PhoneIcon,
    VideoCall as VideoCallIcon,
    AttachFile as AttachFileIcon,
    EmojiEmotions as EmojiIcon,
    Settings as SettingsIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { FONT_FAMILY } from '../../../Config/font';
import { COLORS } from '../../../Config/color';

const Messages = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedChat, setSelectedChat] = useState(0);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const messagesEndRef = useRef(null);

    // Sample chat data
    const [chats] = useState([
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'Thank you for your help with the project!',
            time: '2:30 PM',
            unread: 2,
            status: 'online',
            type: 'client'
        },
        {
            id: 2,
            name: 'Michael Chen',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'Can we schedule a meeting for tomorrow?',
            time: '1:45 PM',
            unread: 0,
            status: 'away',
            type: 'client'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'The documents are ready for review',
            time: '12:15 PM',
            unread: 1,
            status: 'online',
            type: 'client'
        },
        {
            id: 4,
            name: 'Admin Team',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'System maintenance scheduled',
            time: '11:30 AM',
            unread: 0,
            status: 'online',
            type: 'admin'
        }
    ]);

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'Sarah Johnson',
            content: 'Hi! I need some assistance with my account settings.',
            time: '2:25 PM',
            isOwn: false,
            avatar: '/api/placeholder/32/32'
        },
        {
            id: 2,
            sender: 'You',
            content: 'Hello Sarah! I\'d be happy to help you with that. What specific settings would you like to modify?',
            time: '2:26 PM',
            isOwn: true
        },
        {
            id: 3,
            sender: 'Sarah Johnson',
            content: 'I want to update my notification preferences and change my profile information.',
            time: '2:28 PM',
            isOwn: false,
            avatar: '/api/placeholder/32/32'
        },
        {
            id: 4,
            sender: 'You',
            content: 'Perfect! I can guide you through both of those. Let\'s start with the notification settings first.',
            time: '2:29 PM',
            isOwn: true
        },
        {
            id: 5,
            sender: 'Sarah Johnson',
            content: 'Thank you for your help with the project!',
            time: '2:30 PM',
            isOwn: false,
            avatar: '/api/placeholder/32/32'
        }
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage = {
                id: messages.length + 1,
                sender: 'You',
                content: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isOwn: true
            };
            setMessages([...messages, newMessage]);
            setMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'online': return '#4caf50';
            case 'away': return '#ff9800';
            case 'busy': return '#f44336';
            default: return '#9e9e9e';
        }
    };

    const filteredChats = chats.filter(chat =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: 4, bgcolor: '#f5f7fa' }}>
            <Box
                elevation={0}
                sx={{
                    height: 'calc(100vh - 10px)',
                    display: 'flex',
                    overflow: 'hidden',
                    borderRadius: 2,
                }}
            >
                <Box sx={{ width: 320, borderRight: '1px solid #e0e0e0', bgcolor: '#fff' }}>
                    <Box sx={{ p: 2.8, borderBottom: '1px solid #e0e0e0' }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Search conversations..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ color: '#9e9e9e' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    bgcolor: '#f8f9fa',
                                    '&:hover': { bgcolor: '#f0f2f5' },
                                }
                            }}
                        />
                    </Box>

                    {/* Chat List */}
                    <List sx={{ height: 'calc(100% - 80px)', overflow: 'auto', p: 0 }}>
                        {filteredChats.map((chat, index) => (
                            <Fade in={true} timeout={300} key={chat.id} style={{ transitionDelay: `${index * 50}ms` }}>
                                <ListItem
                                    button
                                    selected={selectedChat === index}
                                    onClick={() => setSelectedChat(index)}
                                    sx={{
                                        cursor: 'pointer',
                                        fontFamily: FONT_FAMILY.primary,
                                        py: 1.5,
                                        px: 2,
                                        '&.Mui-selected': {
                                            bgcolor: 'rgba(25, 118, 210, 0.08)',
                                            borderRight: '3px solid #1976d2'
                                        },
                                        '&:hover': { bgcolor: '#f8f9fa' },
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <ListItemAvatar>
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            badgeContent={
                                                <Box
                                                    sx={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: '50%',
                                                        bgcolor: getStatusColor(chat.status),
                                                        border: '2px solid #fff'
                                                    }}
                                                />
                                            }
                                        >
                                            <Avatar src={chat.avatar} sx={{ width: 48, height: 48 }}>
                                                {chat.name.charAt(0)}
                                            </Avatar>
                                        </Badge>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Typography variant="subtitle1" sx={{
                                                    fontFamily: FONT_FAMILY.primary,
                                                    fontWeight: 600, color: '#2c3e50'
                                                }}>
                                                    {chat.name}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    {chat.type === 'admin' && (
                                                        <Chip label="Admin" size="small" color="primary" sx={{ fontSize: '10px', height: 18 }} />
                                                    )}
                                                    <Typography variant="caption" sx={{
                                                        fontFamily: FONT_FAMILY.primary,
                                                        color: '#7b8794'
                                                    }}>
                                                        {chat.time}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                        secondary={
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#7b8794',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        maxWidth: '180px'
                                                    }}
                                                >
                                                    {chat.lastMessage}
                                                </Typography>
                                                {chat.unread > 0 && (
                                                    <Zoom in={true}>
                                                        <Badge
                                                            badgeContent={chat.unread}
                                                            color="primary"
                                                            sx={{
                                                                '& .MuiBadge-badge': {
                                                                    minWidth: 20,
                                                                    height: 20,
                                                                    fontSize: '12px',
                                                                    fontWeight: 600
                                                                }
                                                            }}
                                                        />
                                                    </Zoom>
                                                )}
                                            </Box>
                                        }
                                    />
                                </ListItem>
                            </Fade>
                        ))}
                    </List>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>

                    <Box
                        sx={{
                            p: 2,
                            borderBottom: '1px solid #e0e0e0',
                            bgcolor: '#fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Badge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    badgeContent={
                                        <Box
                                            sx={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                bgcolor: getStatusColor(filteredChats[selectedChat]?.status),
                                                border: '2px solid #fff'
                                            }}
                                        />
                                    }
                                >
                                    <Avatar src={filteredChats[selectedChat]?.avatar} sx={{ width: 48, height: 48 }}>
                                        {filteredChats[selectedChat]?.name.charAt(0)}
                                    </Avatar>
                                </Badge>
                                <Box>
                                    <Typography variant="h6" sx={{ fontFamily: FONT_FAMILY.primary, fontWeight: 600, color: '#2c3e50' }}>
                                        {filteredChats[selectedChat]?.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontFamily: FONT_FAMILY.primary, color: '#7b8794', textTransform: 'capitalize' }}>
                                        {filteredChats[selectedChat]?.status}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton size="small" sx={{ color: '#7b8794', '&:hover': { color: '#1976d2' } }}>
                                    <PhoneIcon />
                                </IconButton>
                                <IconButton size="small" sx={{ color: '#7b8794', '&:hover': { color: '#1976d2' } }}>
                                    <VideoCallIcon />
                                </IconButton>
                                <IconButton size="small" sx={{ color: '#7b8794', '&:hover': { color: '#1976d2' } }}>
                                    <MoreVertIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            overflow: 'auto',
                            p: 2,
                            bgcolor: '#f8f9fa',
                            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
                            backgroundSize: '20px 20px'
                        }}
                    >
                        {messages.map((msg, index) => (
                            <Fade in={true} timeout={300} key={msg.id} style={{ transitionDelay: `${index * 50}ms` }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: msg.isOwn ? 'flex-end' : 'flex-start',
                                        mb: 2,
                                        alignItems: 'flex-end',
                                        gap: 1
                                    }}
                                >
                                    {!msg.isOwn && (
                                        <Avatar src={msg.avatar} sx={{ width: 32, height: 32 }}>
                                            {msg.sender.charAt(0)}
                                        </Avatar>
                                    )}
                                    <Box sx={{ maxWidth: '70%' }}>
                                        {!msg.isOwn && (
                                            <Typography variant="caption" sx={{ fontFamily: FONT_FAMILY.primary, color: '#7b8794', mb: 0.5, ml: 1 }}>
                                                {msg.sender}
                                            </Typography>
                                        )}
                                        <Paper
                                            elevation={1}
                                            sx={{
                                                p: 1.5,
                                                bgcolor: msg.isOwn ? COLORS.primary : '#fff',
                                                color: msg.isOwn ? '#fff' : '#2c3e50',
                                                borderRadius: msg.isOwn ? '14px 14px 1px 14px' : '14px 14px 14px 1px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
                                                }
                                            }}
                                        >
                                            <Typography variant="body1" sx={{ fontFamily: FONT_FAMILY.primary, lineHeight: 1.4 }}>
                                                {msg.content}
                                            </Typography>
                                        </Paper>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: '#7b8794',
                                                ml: msg.isOwn ? 0 : 1,
                                                mr: msg.isOwn ? 1 : 0,
                                                display: 'block',
                                                textAlign: msg.isOwn ? 'right' : 'left',
                                                mt: 0.5
                                            }}
                                        >
                                            {msg.time}
                                        </Typography>
                                    </Box>
                                    {msg.isOwn && (
                                        <Avatar sx={{ width: 32, height: 32, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: COLORS.primary, }}>
                                            {isAdmin ? 'A' : 'C'}
                                        </Avatar>
                                    )}
                                </Box>
                            </Fade>
                        ))}
                        <div ref={messagesEndRef} />
                    </Box>

                    {/* Message Input */}
                    <Box
                        sx={{
                            p: 2,
                            borderTop: '1px solid #e0e0e0',
                            bgcolor: '#fff'
                        }}
                    >
                        <TextField
                            fullWidth
                            multiline
                            maxRows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton size="small" sx={{ color: '#7b8794' }}>
                                            <AttachFileIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                                            <IconButton size="small" sx={{ color: '#7b8794' }}>
                                                <EmojiIcon />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                onClick={handleSendMessage}
                                                disabled={!message.trim()}
                                                sx={{
                                                    bgcolor: message.trim() ? '#1976d2' : 'transparent',
                                                    color: message.trim() ? '#fff' : '#7b8794',
                                                    '&:hover': {
                                                        bgcolor: message.trim() ? '#1565c0' : 'rgba(0,0,0,0.04)'
                                                    },
                                                    transition: 'all 0.2s ease'
                                                }}
                                            >
                                                <SendIcon />
                                            </IconButton>
                                        </Box>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 3,
                                    bgcolor: '#f8f9fa',
                                    '&:hover': { bgcolor: '#f0f2f5' },
                                    '&.Mui-focused': { bgcolor: '#fff' }
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            {/* </Container> */}
        </Box>
    );
};

export default Messages;