# Database schema

## Users

| Field | Type | Description |
| --- | --- | --- |
| id | int | User ID |
| email | string | Email |
| password | string | Password |
| gender | enum | Gender |
| sexual_preferences | enum | Sexual preference |
| biography | string | Biography |
| profile_picture | string | Profile picture ID |
| first_name | string | First name |
| last_name | string | Last name |
| birth_date | date | Birthdate |
| fame_rating | float | Fame rating |
| location | string | Location |
| created_at | date | Creation date |
| last_connection | date | Last connection date |

### Account verification

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| token | string | Verification token |
| created_at | date | Creation date |

### Tags

| Field | Type | Description |
| --- | --- | --- |
| id | int | Tag ID |
| name | string | Tag name |

### User tags

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| tag_id | int | Tag ID |

### User pictures

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| picture_id | string | Picture ID |

### Profile views

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| viewer_id | int | Viewer ID |
| view_date | date | View date |

### Likes

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| liked_id | int | Liked user ID |

### Blocked users

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| blocked_id | int | Blocked user ID |

### Notifications

| Field | Type | Description |
| --- | --- | --- |
| user_id | int | User ID |
| type | enum | Notification type |
| created_at | date | Creation date |

### Messages

| Field | Type | Description |
| --- | --- | --- |
| sender_id | int | Sender ID |
| receiver_id | int | Receiver ID |
| message | string | Message |
| created_at | date | Creation date |
| read_at | date | Read date |
