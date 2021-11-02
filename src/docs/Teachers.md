## Teacher Route Requests

#### 1. Teacher Create Post Endpoint

##### Request

`SERVER_URL/teachers/`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| user_id | user_id  | UUID | true |
| phone | phone | String | true |
| skills | Teacher skills| Array of strings | true |

##### Response status codes

`201 - Teacher created successfully`
`400 - phone || skills is incorrect`
`500 - Internal Server Error`


#### 2. Teacher Get Endpoint

##### Request

`SERVER_URL/teachers/`

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


#### 3. Teacher Update Put Endpoint

##### Request

`SERVER_URL/teachers/:teacher_id`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| user_id | user_id  | UUID | true |
| phone | phone | String | true |
| skills | Teacher skills| Array of strings | true |
| teacher_id | Teacher's unique UUID(req.params.teacher_id)| String | true |

##### Response status codes

`200 - Teacher updated successfully`
`400 - phone || skills is incorrect`
`500 - Internal Server Error`