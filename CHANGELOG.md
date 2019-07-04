# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2019-06-09

### Added

- Blocks support for Forms, Donations and Petitions
- WPGraphQL query support for Forms, Donation and Petitions

### Changed

- Using Parcel for build

## [0.0.13] - 2019-04-16

### Added

- Fluent API for ActionNetwork\Person

### Changed

- Continued work on ActionNetwork\Person class
- Better error handling

### Fixed

- Classes now resolve properly
- WordPress API calls are functional

## [0.0.12] - 2019-02-21

### Added

- Semantic changelog
- PHPCS.xml rules

### Changed

- TinyPixel\ActionNetwork is now statically instanced.

### Fixed

- TinyPixel\ActionNetwork\WordPressAPI creates TinyPixel\ActionNetwork\Form and TinyPixel\ActionNetwork\Embed objects
- TinyPixel\ActionNetwork\Form and TinyPixel\ActionNetwork\Embed now properly source helper functions from helper.php
- Error definitions are now sourced before they are utilized