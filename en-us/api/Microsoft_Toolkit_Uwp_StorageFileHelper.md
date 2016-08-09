---
permalink: /en-US/api/Microsoft_Toolkit_Uwp_StorageFileHelper.htm
title: Microsoft.Toolkit.Uwp.StorageFileHelper API 
description: API page for Microsoft.Toolkit.Uwp.StorageFileHelper
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---


# StorageFileHelper class

This class provides static helper methods for [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

## Members

The **StorageFileHelper** class has this types of members

* [methods](#methods)

### methods

#### ReadTextFromLocalFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteTextToLocalFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteTextToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in well known folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteTextToFileAsync(Windows.Storage.StorageFolder fileLocation,System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteBytesToLocalFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteBytesToLocalCacheFileAsync(System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to application local cache folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteBytesToKnownFolderFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) to well known folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteBytesToFileAsync(Windows.Storage.StorageFolder fileLocation,System.Byte[] bytes,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves an array of bytes to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadTextFromPackagedFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadTextFromLocalCacheFileAsync(System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### WriteTextToLocalCacheFileAsync(System.String text,System.String fileName,Windows.Storage.CreationCollisionOption options)

Saves a string value to a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) in application local cache folder/>.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadTextFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadTextFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets a string value from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesFromPackagedFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application installation folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesFromLocalCacheFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local cache folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesFromLocalFileAsync(System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the application local folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesFromKnownFoldersFileAsync(Windows.Storage.KnownFolderId knownFolderId,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in a well known folder.

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesFromFileAsync(Windows.Storage.StorageFolder fileLocation,System.String fileName)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile) located in the given [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder).

##### parameters



| name | description | type |
##### exceptions


| type | description |


#### ReadBytesAsync(Windows.Storage.StorageFile file)

Gets an array of bytes from a [StorageFile](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFile).

##### parameters



| name | description | type |


#### GetFolderFromKnownFolderId(Windows.Storage.KnownFolderId knownFolderId)

Returns a [StorageFolder](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.StorageFolder) from a [KnownFolderId](https://msdn.microsoft.com/library/windows/apps/Windows.Storage.KnownFolderId)

##### parameters



| name | description | type |
