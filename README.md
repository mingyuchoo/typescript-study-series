<p align="center">
  <a href="https://github.com/mingyuchoo/typescript-study-series/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/mingyuchoo/typescript-study-series"/></a>
  <a href="https://github.com/mingyuchoo/typescript-study-series/issues"><img alt="Issues" src="https://img.shields.io/github/issues/mingyuchoo/typescript-study-series?color=appveyor" /></a>
  <a href="https://github.com/mingyuchoo/typescript-study-series/pulls"><img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mingyuchoo/typescript-study-series?color=appveyor" /></a>
</p>

# typescript-study-series

## Install `fnm` node manager

```bash
cargo install fnm
# or
curl -fsSL https://fnm.vercel.app/install | bash -s -- --skip-shell
```
## How to use `fnm`

```bash
# Listing all remote versions
fnm ls-remote

# Installing
fnm install <version>

# Listing all installed ones
fnm ls

# Displaying the version of currently used Node
fnm current

# Using a Node of a particular version
fnm use <version>

# Shortcut for setting 'default' as an alias
fnm default <version>

# Uninstalling
fnm uninstall <version>
```
