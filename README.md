Composible interface for [Fluence](https://fluence.dev) network to do file system actions in the particle vault folder. 

```
service CioVault("cioVault"):
  dir(path: string) -> bool
  inspect(path: string) -> []string
  write(data: string, path: string) -> bool
```