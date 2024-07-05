# SearchOptionRelation

The relation container will contain the relation parameter (And/Or) that has to be used among multiple option codes in the location search. This is only applicable to option type Additional Services and Program Types. If this container is not present for Additional Services and Program Types, the default relation of And is used.

**Properties**

| Name | Type   | Required | Description                                                                                        |
| :--- | :----- | :------- | :------------------------------------------------------------------------------------------------- |
| code | string | ✅       | Applicable for Additional Services and Program Types. Valid values: - 01 - And (Default) - 02 - Or |

<!-- This file was generated by liblab | https://liblab.com/ -->