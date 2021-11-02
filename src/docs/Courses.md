## Course Route Requests

#### 1. Course Create Post Endpoint

##### Request

`SERVER_URL/courses/`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| name | Course name  | String | true |
| description | Course Description | String | true |
| price | Course Price| String | true | 
| photo | Course Photo| File | true |



##### Response status codes

`201 - Course created successfully`
`400 - name || description || price is incorrect`
`500 - Internal Server Error`


#### 2. Course Get Endpoint

##### Request

`SERVER_URL/courses/`

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


#### 3. Course One Get Endpoint

##### Request

`SERVER_URL/courses/:course_id`

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
| course_id | Course UUID  | UUID | true |

##### Response status codes

`200 - OK`
`500 - Internal Server Error`


#### 4. Course Update Put Endpoint

##### Request

`SERVER_URL/teachers/:teacher_id`

Headers:
`Content-Type: "application/json"`

Request body:
| Name | Description | Type | Required |
| ----------- | ----------- | ---- | --- |
| name | Course name  | String | true |
| description | Course Description | String | true |
| price | Course Price| String | true | 
| photo | Course Photo| File | true |
| course_id | Course's unique UUID(req.params.teacher_id)| String | true |

##### Response status codes

`200 - Course updated successfully`
`400 - name || description || price is incorrect`
`500 - Internal Server Error`