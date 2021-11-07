## Group Route Requests

#### 1. Group Create Post Endpoint

##### Request

`SERVER_URL/groups/`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| time | Group time (o'clock)  | String | true |
| status | ["active", "waiting", "cancelled"] | String | true |
| lesson_duration | Group lesson_duration| INT | true | 
| course_duration | Group_duration| INT | true |
| schedule | schedule of group| Array | true |
| teacher_id | teacher_id| UUID | true |
| course_id | course_id| UUID | true | 


##### Response status codes

`201 - Group created successfully`
`400 - One of the arguments is incorrect`
`500 - Internal Server Error`


#### 2. Group Get Endpoint

##### Request

`SERVER_URL/Groups/`

Headers:
`Content-Type: "application/json"`
`Authorization: "TOKEN"`

Permissions:
`Admin`

Query body:
| Name | Default | Type | Required |
| ----------- | ----------- | ---- | --- |
| limit | 15 | Number | false |
| offset | 0 | Number | false |

##### Response status codes

`200 - OK`
`500 - Internal Server Error`


#### 3. Group One Get Endpoint

##### Request

`SERVER_URL/Groups/:Group_id`

Headers:
`Content-Type: "application/json"`
`Authorization: "TOKEN"`

Permissions:
`Admin`

Query body:
| Name | Default | Type | Required |
| ----------- | ----------- | ---- | --- |
| limit | 15 | Number | false |
| offset | 0 | Number | false |


Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| Group_id | Group UUID  | UUID | true |

##### Response status codes

`200 - OK`
`500 - Internal Server Error`


#### 4. Group Update Put Endpoint

##### Request

`SERVER_URL/teachers/:teacher_id`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| name | Group name  | String | true |
| description | Group Description | String | true |
| price | Group Price| String | true | 
| photo | Group Photo| File | true |
| Group_id | Group's unique UUID(req.params.teacher_id)| String | true |

##### Response status codes

`200 - Group updated successfully`
`400 - name || description || price is incorrect`
`500 - Internal Server Error`