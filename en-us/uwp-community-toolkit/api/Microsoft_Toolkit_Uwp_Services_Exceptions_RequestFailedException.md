
# Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException class

Exception for failed requests.

## Members

The **Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException** namespace has these types of members

* [constructors](#constructors)

### constructors

#### Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException.#ctor

Initializes a new instance of the [RequestFailedException](T_Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException) class.

#### Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException.#ctor(System.String)

Initializes a new instance of the [RequestFailedException](T_Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException) class.

##### parameters




| name | description |

| --- | --- |

| message | Additional messsage. |

#### Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException.#ctor(Windows.Web.Http.HttpStatusCode,System.String)

Initializes a new instance of the [RequestFailedException](T_Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException) class.

##### parameters




| name | description |

| --- | --- |

| statusCode | Failure status code. |

| reason | Failure reason. |

#### Microsoft.Toolkit.Uwp.Services.Exceptions.RequestFailedException.#ctor(System.String,System.Exception)

Initializes a new instance of the [RequestFailedException](T_Microsoft_Toolkit_Uwp_Services_Exceptions_RequestFailedException) class.

##### parameters




| name | description |

| --- | --- |

| message | Additional message. |

| innerException | Reference to inner exception. |