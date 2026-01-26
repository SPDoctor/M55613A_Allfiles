# .NET Framework 4.8 to .NET 10.0 Migration Tasks

**Project**: ContosoConf.csproj  
**Strategy**: All-At-Once Migration  
**Status**: Ready to Execute

---

## Progress Dashboard
**Progress**: 5/10 tasks complete (50%) ![50%](https://progress-bar.xyz/50)
- **Total Tasks**: 10
- **Completed**: 1
- **In Progress**: 0
- **Remaining**: 9
- **Failed**: 0

---

## Task List

### [?] TASK-001: Verify Prerequisites and Environment *(Completed: 2026-01-26 14:20)*
**Description**: Verify that the development environment is ready for .NET 10.0 migration

**Actions**:
- [?] (1) Verify .NET 10.0 SDK is installed on the machine
- [?] (2) Verify global.json compatibility with .NET 10.0 (if exists)
- [?] (3) Identify current project structure and files to be modified

**Expected Outcome**: Environment verified and ready for migration

**Verification**: .NET 10.0 SDK available, no blocking issues identified

---

### [?] TASK-002: Convert Project to SDK-Style Format *(Completed: 2026-01-26 14:22)*
**Description**: Convert ContosoConf.csproj from classic format to SDK-style format

**Actions**:
- [?] (1) Backup current ContosoConf.csproj file
- [?] (2) Read current project file to understand structure
- [?] (3) Convert project to SDK-style format using upgrade tool
- [?] (4) Verify project loads successfully after conversion
- [?] (5) Commit changes: "Convert ContosoConf to SDK-style project"

**Expected Outcome**: Project converted to SDK-style format, project loads in IDE

**Verification**: Project file uses `<Project Sdk="Microsoft.NET.Sdk.Web">`, project loads without errors

---

### [?] TASK-003: Update Target Framework to .NET 10.0 *(Completed: 2026-01-26 14:23)*
**Description**: Update the TargetFramework property from net48 to net10.0

**Actions**:
- [?] (1) Update TargetFramework in ContosoConf.csproj to net10.0
- [?] (2) Restore NuGet packages
- [?] (3) Verify project targets .NET 10.0

**Expected Outcome**: Project targets .NET 10.0 (compilation errors expected)

**Verification**: TargetFramework property set to net10.0

---

### [?] TASK-004: Remove Incompatible NuGet Packages *(Completed: 2026-01-26 14:25)*
**Description**: Remove ASP.NET Framework packages that are now included in ASP.NET Core

**Actions**:
- [?] (1) Remove Microsoft.AspNet.Mvc package reference
- [?] (2) Remove Microsoft.AspNet.Razor package reference
- [?] (3) Remove Microsoft.AspNet.WebPages package reference
- [?] (4) Remove Microsoft.Web.Infrastructure package reference
- [?] (5) Restore NuGet packages
- [?] (6) Commit changes: "Remove incompatible ASP.NET Framework packages"

**Expected Outcome**: No explicit ASP.NET MVC package references, functionality comes from framework

**Verification**: Project file contains no PackageReference elements for removed packages

---

### [?] TASK-005: Create Program.cs and Migrate Application Initialization *(Completed: 2026-01-26 14:27)*
**Description**: Convert Global.asax.cs application lifecycle to Program.cs with ASP.NET Core startup

**Actions**:
- [?] (1) Read Global.asax.cs to understand current initialization logic
- [?] (2) Identify routing configuration (RouteConfig.cs or in Global.asax.cs)
- [?] (3) Create Program.cs with ASP.NET Core minimal hosting model
- [?] (4) Configure services (AddControllersWithViews)
- [?] (5) Set up middleware pipeline (UseStaticFiles, UseRouting, UseAuthorization)
- [?] (6) Migrate routing to endpoint routing in Program.cs
- [?] (7) Remove Global.asax file
- [?] (8) Remove Global.asax.cs file
- [?] (9) Remove RouteConfig.cs file (if exists)
- [?] (10) Commit changes: "Migrate application initialization to ASP.NET Core Program.cs"

**Expected Outcome**: Program.cs created with ASP.NET Core startup, legacy files removed

**Verification**: Program.cs exists, Global.asax/Global.asax.cs removed, routing configured

---

### [?] TASK-006: Migrate Controllers and Fix API Compatibility Issues
**Description**: Update all controllers to use Microsoft.AspNetCore.Mvc and fix API compatibility issues

**Actions**:
- [?] (1) Identify all controller files in the project
- [ ] (2) Update using statements: System.Web.Mvc ? Microsoft.AspNetCore.Mvc
- [ ] (3) Fix JsonResult calls (remove JsonRequestBehavior.AllowGet)
- [ ] (4) Update Request/Response property access for ASP.NET Core
- [ ] (5) Fix HTTP attribute namespaces ([HttpPost], etc.)
- [ ] (6) Update ModelState usage if needed
- [ ] (7) Replace JavaScriptSerializer with System.Text.Json (if present)
- [ ] (8) Update WebSocket implementation (if present)
- [ ] (9) Fix UrlParameter.Optional usage (use nullable types)
- [ ] (10) Commit changes: "Fix API compatibility for ASP.NET Core"

**Expected Outcome**: All controllers use ASP.NET Core APIs, 67 API issues resolved

**Verification**: Controllers compile without errors, using Microsoft.AspNetCore.Mvc namespace

---

### [ ] TASK-007: Create appsettings.json and Migrate Configuration
**Description**: Migrate web.config application settings to appsettings.json

**Actions**:
- [ ] (1) Read web.config to identify app settings and connection strings
- [ ] (2) Create appsettings.json in project root
- [ ] (3) Migrate app settings from web.config
- [ ] (4) Migrate connection strings from web.config (if any)
- [ ] (5) Update any code using ConfigurationManager to use IConfiguration
- [ ] (6) Commit changes: "Migrate configuration to appsettings.json"

**Expected Outcome**: appsettings.json created, configuration migrated

**Verification**: appsettings.json exists with proper structure, no ConfigurationManager usage

---

### [ ] TASK-008: Build Project and Resolve Compilation Errors
**Description**: Build the project and systematically resolve all compilation errors

**Actions**:
- [ ] (1) Build ContosoConf.csproj
- [ ] (2) Review compilation errors
- [ ] (3) Fix missing namespace references (add using statements)
- [ ] (4) Fix type mismatches and method signature differences
- [ ] (5) Fix property access changes
- [ ] (6) Rebuild until 0 errors
- [ ] (7) Address any warnings
- [ ] (8) Commit changes: "Resolve compilation errors for .NET 10.0"

**Expected Outcome**: Project builds with 0 errors and 0 warnings

**Verification**: dotnet build succeeds with no errors

---

### [ ] TASK-009: Run Application and Perform Smoke Tests
**Description**: Start the application and perform basic smoke tests

**Actions**:
- [ ] (1) Run the application
- [ ] (2) Verify application starts without errors
- [ ] (3) Access home page via default route
- [ ] (4) Test at least one controller action
- [ ] (5) Verify static files are served (CSS, JS)
- [ ] (6) Check for runtime errors in console

**Expected Outcome**: Application runs successfully on .NET 10.0

**Verification**: Application starts, home page loads, no runtime errors

---

### [ ] TASK-010: Final Validation and Migration Complete
**Description**: Perform final validation and mark migration complete

**Actions**:
- [ ] (1) Verify project is SDK-style format
- [ ] (2) Verify TargetFramework is net10.0
- [ ] (3) Verify all incompatible packages removed
- [ ] (4) Verify Program.cs exists with proper configuration
- [ ] (5) Verify legacy files removed (Global.asax, Global.asax.cs, RouteConfig.cs)
- [ ] (6) Verify solution builds with 0 errors and 0 warnings
- [ ] (7) Verify application starts and runs
- [ ] (8) Create final commit: "Complete .NET 10.0 migration"
- [ ] (9) Update execution log with final summary

**Expected Outcome**: Migration complete, all success criteria met

**Verification**: All technical and functional criteria from plan satisfied

---

## Execution Log

Migration execution started: [Timestamp TBD]

### Task Execution History

[Execution history will be tracked here]

---

## Notes

- Migration follows All-At-Once strategy for single project
- All changes committed incrementally for tracking
- Rollback available via git if needed
- No branch change per user request (staying on dotnet10 branch)
