# .NET Framework 4.8 to .NET 10.0 Migration Plan

## Table of Contents

- [Executive Summary](#executive-summary)
- [Migration Strategy](#migration-strategy)
- [Detailed Dependency Analysis](#detailed-dependency-analysis)
- [Project-by-Project Plans](#project-by-project-plans)
- [Risk Management](#risk-management)
- [Testing & Validation Strategy](#testing--validation-strategy)
- [Complexity & Effort Assessment](#complexity--effort-assessment)
- [Source Control Strategy](#source-control-strategy)
- [Success Criteria](#success-criteria)

---

## Executive Summary

### Scenario Description
This plan guides the migration of the ContosoConf ASP.NET MVC application from .NET Framework 4.8 to .NET 10.0 (Long Term Support). This represents a significant architectural shift from legacy ASP.NET Framework to modern ASP.NET Core.

### Scope
**Projects Affected**: 1 project
- **ContosoConf.csproj** - ASP.NET MVC web application (561 LOC)

**Current State**: 
- Target Framework: .NET Framework 4.8
- Project Type: Classic ASP.NET MVC (non-SDK-style)
- NuGet Packages: 4 packages (Microsoft.AspNet.Mvc, Razor, WebPages, Web.Infrastructure)

**Target State**:
- Target Framework: .NET 10.0
- Project Type: ASP.NET Core web application (SDK-style)
- Package Dependencies: Framework-included (ASP.NET Core MVC)

### Discovered Metrics
- **Total Projects**: 1
- **Total LOC**: 561
- **Estimated LOC to Modify**: 67+ (11.9% of codebase)
- **NuGet Packages**: 4 (all functionality now included in framework)
- **API Issues**: 67 total
  - ?? Binary Incompatible: 58 (High impact - require code changes)
  - ?? Source Incompatible: 8 (Medium impact - re-compilation needed)
  - ?? Behavioral Change: 1 (Low impact - runtime behavior testing)
- **Security Vulnerabilities**: None ?
- **Dependency Depth**: 0 (single standalone project)

### Complexity Classification
**Medium-High Complexity** - While this is a single project with manageable size, it requires significant architectural migration:
- ASP.NET Framework MVC ? ASP.NET Core MVC (major paradigm shift)
- Classic project file ? SDK-style project
- System.Web dependencies ? ASP.NET Core equivalents
- Global.asax application lifecycle ? ASP.NET Core startup
- RouteCollection routing ? ASP.NET Core endpoint routing

### Selected Strategy
**All-At-Once Strategy** - All project changes applied simultaneously in a single atomic operation.

**Rationale**:
- Single project (optimal for All-At-Once)
- No project dependencies to coordinate
- Clean architectural transition without intermediate states
- Faster completion timeline
- All changes testable as unified migration

### Critical Issues
- **SDK-Style Conversion Required**: Project must be converted from classic .csproj to SDK-style
- **ASP.NET Core Migration**: Complete framework migration from System.Web to ASP.NET Core
- **API Compatibility**: 67 API issues requiring code modifications
- **Routing Migration**: RouteCollection ? ASP.NET Core endpoint routing
- **Application Lifecycle**: Global.asax ? Program.cs/Startup.cs pattern

### Recommended Approach
All-At-Once atomic migration with following sequence:
1. Convert project to SDK-style
2. Update target framework to .NET 10.0
3. Remove incompatible NuGet packages (functionality now in framework)
4. Migrate controllers, views, and routing to ASP.NET Core patterns
5. Fix API compatibility issues
6. Update application initialization
7. Build, test, and validate

### Expected Remaining Iterations
- Phase 2: Foundation (3 iterations) - Strategy, dependency analysis, project stubs
- Phase 3: Detailed Planning (1-2 iterations) - Complete project migration plan
- **Total**: ~5-6 iterations

---

## Migration Strategy

### Approach Selection

**Selected Approach**: **All-At-Once Strategy**

This migration will update the ContosoConf project from .NET Framework 4.8 to .NET 10.0 in a single atomic operation, applying all changes simultaneously.

### Justification

The All-At-Once strategy is ideal for this migration because:

1. **Single Project Scope**: Only one project to migrate eliminates coordination complexity
2. **No Internal Dependencies**: No other projects depend on this project, removing phasing requirements
3. **Clean Architectural Transition**: ASP.NET Framework ? ASP.NET Core is best done atomically to avoid hybrid states
4. **Manageable Size**: 561 LOC with 67+ lines to modify is appropriate for single-phase migration
5. **Unified Testing**: All changes can be validated together in one comprehensive test pass
6. **No Intermediate States**: Avoiding partial migration states reduces complexity and testing burden
7. **Faster Completion**: Single coordinated effort completes faster than incremental approach

### All-At-Once Strategy Rationale

**Architectural Benefits**:
- ASP.NET MVC ? ASP.NET Core migration requires consistent patterns (routing, DI, middleware)
- Global.asax ? Program.cs transformation must be complete (no partial application lifecycle)
- System.Web.Mvc ? Microsoft.AspNetCore.Mvc conversion works best as unified change
- Project file structure (classic ? SDK-style) cannot be partially converted

**Risk Management**:
- Single project limits blast radius of issues
- No downstream project impacts to coordinate
- Comprehensive testing validates entire migration at once
- Single rollback point if issues arise

**Execution Efficiency**:
- No need to maintain multi-targeting during transition
- No coordination between project teams required
- Single build/test/deploy cycle
- Simplified dependency resolution

### Migration Phases

Since this is an All-At-Once migration, all work happens in a single atomic phase:

#### Phase 1: Atomic Migration (All Operations)

**Operations Performed Simultaneously**:
1. **Project File Conversion** - Convert ContosoConf.csproj from classic to SDK-style format
2. **Target Framework Update** - Change TargetFramework from net48 to net10.0
3. **Package Reference Updates** - Remove ASP.NET Framework packages (now included in framework)
4. **Application Architecture Migration**:
   - Convert Global.asax application lifecycle to Program.cs/Startup.cs pattern
   - Migrate RouteCollection routing to ASP.NET Core endpoint routing
   - Update controller base classes and action results
   - Migrate dependency injection patterns
5. **API Compatibility Fixes** - Address 67 API issues (binary/source incompatible, behavioral changes)
6. **Build and Compilation** - Resolve all compilation errors
7. **Testing and Validation** - Execute full test pass

**Deliverable**: Fully migrated ContosoConf application running on .NET 10.0

### Dependency-Based Ordering

**Not Applicable** - Single project has no internal dependencies requiring ordering.

The migration sequence within the project follows logical dependencies:
1. Project file structure (enables framework change)
2. Framework and package updates (enables compilation)
3. Code modifications (fixes compilation errors)
4. Testing (validates functionality)

### Parallel vs Sequential Execution

**Sequential Execution Within Single Task** - All operations within the ContosoConf migration must occur sequentially:
- SDK-style conversion ? Framework update ? Package updates ? Code fixes ? Build ? Test

**Rationale**: Each step depends on the previous completing successfully. Cannot fix API issues before updating framework, cannot test before building succeeds.

### Risk Considerations for All-At-Once

**Risk Mitigation**:
- ? **Clear Rollback Point**: Single project on dedicated branch allows easy rollback
- ? **Comprehensive Testing**: Full application test after all changes
- ? **No Downstream Impact**: No other projects affected by changes
- ? **Atomic Commits**: Changes can be committed as single logical unit

**Acceptance Criteria for Phase Completion**:
- [ ] Project converted to SDK-style
- [ ] Target framework set to net10.0
- [ ] All incompatible packages removed
- [ ] Application architecture migrated to ASP.NET Core patterns
- [ ] Solution builds with 0 errors and 0 warnings
- [ ] All existing functionality works correctly
- [ ] No API compatibility issues remain

---

## Detailed Dependency Analysis

### Project Dependency Graph

This solution contains a single standalone project with no internal project dependencies:

```
ContosoConf.csproj (net48 ? net10.0)
  ??? [No project dependencies]
```

**Dependency Characteristics**:
- **Dependency Depth**: 0 levels
- **Total Dependencies**: 0 project dependencies
- **Dependency Complexity**: Minimal (single project)
- **Circular Dependencies**: None

### Project Grouping for Migration

Since this is a single project, there is only one migration phase:

**Phase 1: Atomic Migration**
- **ContosoConf.csproj** - ASP.NET MVC web application

### Critical Path

The critical path is straightforward for a single-project solution:
1. Convert ContosoConf.csproj to SDK-style
2. Migrate to .NET 10.0 and ASP.NET Core
3. Fix all API compatibility issues
4. Validate application functionality

**Total Critical Path**: Single project migration (all steps required)

### Migration Sequence Rationale

With no project dependencies, the All-At-Once strategy applies all changes to ContosoConf.csproj in a single coordinated operation:
- No need for phased migration across projects
- No intermediate compatibility requirements
- All API changes, framework updates, and architectural migrations happen atomically
- Single build/test/validate cycle

### External Dependencies

**NuGet Package Dependencies (Current)**:
- Microsoft.AspNet.Mvc 5.2.3
- Microsoft.AspNet.Razor 3.2.3
- Microsoft.AspNet.WebPages 3.2.3
- Microsoft.Web.Infrastructure 1.0.0.0

**Post-Migration Dependencies**:
- All ASP.NET MVC functionality included in .NET 10.0 framework reference
- No explicit NuGet packages required for core MVC functionality

### Framework Dependencies

**Current**: .NET Framework 4.8
- System.Web.* assemblies (System.Web, System.Web.Mvc, System.Web.Routing, etc.)
- Full .NET Framework BCL

**Target**: .NET 10.0
- ASP.NET Core framework
- Modern .NET BCL
- Cross-platform runtime

---

## Project-by-Project Plans

### ContosoConf.csproj

**Project Type**: ASP.NET MVC Web Application  
**Current State**: .NET Framework 4.8, Classic project format, System.Web-based  
**Target State**: .NET 10.0, SDK-style project, ASP.NET Core-based

---

#### Current State

**Target Framework**: .NET Framework 4.8 (net48)

**Project Format**: Classic (non-SDK-style)

**Project Kind**: Web Application Project (WAP)

**Dependencies**:
- **Project Dependencies**: None
- **NuGet Packages**: 4 packages
  - Microsoft.AspNet.Mvc 5.2.3
  - Microsoft.AspNet.Razor 3.2.3
  - Microsoft.AspNet.WebPages 3.2.3
  - Microsoft.Web.Infrastructure 1.0.0.0

**Code Metrics**:
- Total Files: 87
- Code Files: 7
- Files with Issues: 6
- Lines of Code: 561
- Estimated LOC to Modify: 67+ (11.9%)

**Risk Level**: ?? High - Major architectural migration required

---

#### Target State

**Target Framework**: .NET 10.0 (net10.0)

**Project Format**: SDK-style

**Project Kind**: ASP.NET Core Web Application

**Dependencies**:
- **Project Dependencies**: None
- **Framework References**: ASP.NET Core framework (implicit in SDK)
- **NuGet Packages**: All ASP.NET MVC functionality included in framework

**Expected Code Metrics**:
- Code Files: 7 (same files, modified content)
- Additional Files: Program.cs (replaces Global.asax.cs)
- Configuration Files: appsettings.json (replaces web.config sections)

---

#### Migration Steps

##### Step 1: Prerequisites

**Verify Environment**:
- [ ] .NET 10.0 SDK installed on development machine
- [ ] Visual Studio 2022 or later (with .NET 10.0 support)
- [ ] Project backed up or committed to source control

**Understanding Current Application**:
- [ ] Review existing controllers and their actions
- [ ] Document current routing configuration
- [ ] Identify application initialization logic in Global.asax.cs
- [ ] Note any custom HTTP handlers or modules
- [ ] Review web.config for application settings

##### Step 2: Project File Conversion to SDK-Style

**Convert Project Format**:

The project must be converted from classic .csproj format to SDK-style format. This can be done using the .NET Upgrade Assistant or manually.

**Actions**:
1. **Backup existing ContosoConf.csproj**
2. **Convert to SDK-style project**:
   ```xml
   <Project Sdk="Microsoft.NET.Sdk.Web">
     <PropertyGroup>
       <TargetFramework>net48</TargetFramework>
       <!-- Preserve existing properties like AssemblyName, RootNamespace, OutputType -->
     </PropertyGroup>
   </Project>
   ```
3. **Remove unnecessary elements** (SDK includes these by default):
   - `<Compile Include>` items for .cs files
   - `<Reference>` items for framework assemblies
   - Build configuration details handled by SDK
4. **Verify project loads** in Visual Studio
5. **Test build** to ensure conversion successful

**SDK-Style Benefits**:
- Simpler, more concise project file
- Automatic file inclusion (no manual `<Compile>` items)
- Built-in support for modern .NET

##### Step 3: Update Target Framework

**Change Target Framework**:

Update the `TargetFramework` property in ContosoConf.csproj:

```xml
<TargetFramework>net10.0</TargetFramework>
```

**Actions**:
1. Open ContosoConf.csproj in editor
2. Locate `<TargetFramework>` element
3. Change value from `net48` to `net10.0`
4. Save project file
5. Restore packages: `dotnet restore`

**Expected Outcome**: Project now targets .NET 10.0 (compilation errors expected at this stage)

##### Step 4: Update Package References

**Remove Incompatible Packages**:

All current NuGet packages provide functionality now included in ASP.NET Core framework:

| Package to Remove | Reason | Replacement |
|-------------------|--------|-------------|
| Microsoft.AspNet.Mvc 5.2.3 | Included in framework | ASP.NET Core MVC (implicit via SDK) |
| Microsoft.AspNet.Razor 3.2.3 | Included in framework | ASP.NET Core Razor (implicit via SDK) |
| Microsoft.AspNet.WebPages 3.2.3 | Included in framework | ASP.NET Core (implicit via SDK) |
| Microsoft.Web.Infrastructure 1.0.0.0 | Included in framework | ASP.NET Core (implicit via SDK) |

**Actions**:
1. Remove all `<PackageReference>` elements for packages listed above
2. Save project file
3. Restore packages: `dotnet restore`

**Additional Packages to Consider** (add if needed):
- `Newtonsoft.Json` (if JavaScriptSerializer replacement preference over System.Text.Json)
- `Microsoft.AspNetCore.WebSockets` (already included in framework, but explicit for clarity if using WebSockets)

**Expected Outcome**: Project has no explicit ASP.NET package references; all functionality comes from framework

##### Step 5: Expected Breaking Changes

Based on the assessment, the following breaking changes must be addressed:

**A. Controller Base Class and Namespaces**

**Current**:
```csharp
using System.Web.Mvc;

public class HomeController : Controller
{
    // ...
}
```

**Target**:
```csharp
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    // ...
}
```

**Changes Required**:
- Update `using System.Web.Mvc` ? `using Microsoft.AspNetCore.Mvc`
- Controller base class remains `Controller` but from different namespace
- Update across all controller files

---

**B. Action Result Types**

**JsonResult Changes**:

**Current**:
```csharp
public JsonResult GetData()
{
    return Json(data, JsonRequestBehavior.AllowGet);
}
```

**Target**:
```csharp
public JsonResult GetData()
{
    return Json(data);  // AllowGet not needed in ASP.NET Core
}
```

**Changes**:
- `JsonRequestBehavior` enum doesn't exist in ASP.NET Core (GET allowed by default)
- Remove `JsonRequestBehavior.AllowGet` parameter from `Json()` calls
- `JsonResult` type exists but behavior differs

---

**ViewResult, RedirectResult, ActionResult**:

These types exist in ASP.NET Core with same names but different namespace:
- `System.Web.Mvc.ViewResult` ? `Microsoft.AspNetCore.Mvc.ViewResult`
- `System.Web.Mvc.RedirectResult` ? `Microsoft.AspNetCore.Mvc.RedirectResult`
- `System.Web.Mvc.ActionResult` ? `Microsoft.AspNetCore.Mvc.ActionResult`

**Action**: Update using statements; method signatures remain similar

---

**C. ModelState**

**Current**:
```csharp
if (!ModelState.IsValid)
{
    ModelState.AddModelError("key", "error message");
    // Access errors
    foreach (ModelError error in ModelState["key"].Errors)
    {
        string message = error.ErrorMessage;
    }
}
```

**Target**:
```csharp
if (!ModelState.IsValid)
{
    ModelState.AddModelError("key", "error message");
    // Access errors (same pattern works)
    foreach (var error in ModelState["key"].Errors)
    {
        string message = error.ErrorMessage;
    }
}
```

**Changes**:
- `ModelStateDictionary` type from `Microsoft.AspNetCore.Mvc.ModelBinding`
- API remains largely compatible
- `ModelError`, `ModelErrorCollection` types exist with same interface

---

**D. Request and Response Objects**

**Current**:
```csharp
HttpRequestBase request = Request;
HttpResponseBase response = Response;
Uri url = Request.Url;
response.StatusCode = 404;
```

**Target**:
```csharp
HttpRequest request = Request;
HttpResponse response = Response;
string url = Request.GetDisplayUrl(); // Or Request.Path, Request.QueryString
response.StatusCode = 404;
```

**Changes**:
- `HttpRequestBase` ? `HttpRequest` (from `Microsoft.AspNetCore.Http`)
- `HttpResponseBase` ? `HttpResponse` (from `Microsoft.AspNetCore.Http`)
- `Request.Url` (Uri) ? `Request.GetDisplayUrl()` (string) or use `Request.Path`, `Request.Host`, etc.
- May need `using Microsoft.AspNetCore.Http.Extensions;` for `GetDisplayUrl()`

**Behavioral Change**:
- **System.Uri**: The assessment notes a behavioral change in `System.Uri`
- **Impact**: Slight differences in URL parsing or formatting between .NET Framework and .NET 10.0
- **Mitigation**: Test any URL manipulation or routing logic carefully

---

**E. HTTP Attributes**

**Current**:
```csharp
using System.Web.Mvc;

[HttpPost]
public ActionResult Submit(Model model)
{
    // ...
}
```

**Target**:
```csharp
using Microsoft.AspNetCore.Mvc;

[HttpPost]
public ActionResult Submit(Model model)
{
    // ...
}
```

**Changes**:
- `HttpPostAttribute` from `Microsoft.AspNetCore.Mvc`
- Same usage pattern, just namespace change

---

**F. JSON Serialization**

**Current**:
```csharp
using System.Web.Script.Serialization;

var serializer = new JavaScriptSerializer();
string json = serializer.Serialize(data);
object obj = serializer.DeserializeObject(json);
```

**Target - Option 1** (System.Text.Json):
```csharp
using System.Text.Json;

string json = JsonSerializer.Serialize(data);
object obj = JsonSerializer.Deserialize<object>(json);
```

**Target - Option 2** (Newtonsoft.Json):
```csharp
using Newtonsoft.Json;

string json = JsonConvert.SerializeObject(data);
object obj = JsonConvert.DeserializeObject(json);
```

**Changes**:
- `JavaScriptSerializer` doesn't exist in .NET Core
- Use `System.Text.Json` (built-in, recommended) or `Newtonsoft.Json` (NuGet package, more features)
- Different API patterns for serialization/deserialization

---

**G. WebSocket Support**

**Current**:
```csharp
if (HttpContext.IsWebSocketRequest)
{
    await HttpContext.AcceptWebSocketRequest(async context =>
    {
        WebSocket socket = context.WebSocket;
        // WebSocket logic
    });
}
```

**Target**:
```csharp
if (HttpContext.WebSockets.IsWebSocketRequest)
{
    WebSocket socket = await HttpContext.WebSockets.AcceptWebSocketAsync();
    // WebSocket logic
}
```

**Changes**:
- `HttpContext.IsWebSocketRequest` ? `HttpContext.WebSockets.IsWebSocketRequest`
- `HttpContext.AcceptWebSocketRequest` ? `HttpContext.WebSockets.AcceptWebSocketAsync()`
- `AspNetWebSocketContext` ? Direct `WebSocket` access
- Different API pattern, simpler in ASP.NET Core

---

**H. URL Parameters (Optional)**

**Current**:
```csharp
public ActionResult Details(int id = UrlParameter.Optional)
{
    // ...
}
```

**Target**:
```csharp
public ActionResult Details(int? id = null)
{
    // ...
}
```

**Changes**:
- `UrlParameter.Optional` doesn't exist in ASP.NET Core
- Use nullable types and default values instead

---

##### Step 6: Application Initialization Migration

**Convert Global.asax.cs to Program.cs**:

ASP.NET Framework uses `Global.asax.cs` with `HttpApplication` lifecycle events. ASP.NET Core uses `Program.cs` with minimal hosting model or `Startup.cs` pattern.

**Current Pattern (Global.asax.cs)**:
```csharp
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

public class MvcApplication : HttpApplication
{
    protected void Application_Start()
    {
        AreaRegistration.RegisterAllAreas();
        RouteConfig.RegisterRoutes(RouteTable.Routes);
        // Other initialization
    }
}
```

**Target Pattern (Program.cs)**:
```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Configure routes (see Step 7)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

**Actions**:
1. **Create Program.cs** in project root
2. **Migrate initialization logic** from `Application_Start()` to service configuration
3. **Set up middleware pipeline** (order matters: Exception ? HTTPS ? Static Files ? Routing ? Authorization ? Endpoints)
4. **Configure services**: `AddControllersWithViews()`, dependency injection registrations
5. **Remove Global.asax and Global.asax.cs** (no longer needed)

**Key Concepts**:
- **Dependency Injection**: Services registered in `builder.Services`
- **Middleware Pipeline**: Configured via `app.Use*()` methods
- **Routing**: Configured via `app.Map*()` methods (see next step)

---

##### Step 7: Routing Migration

**Convert RouteCollection to Endpoint Routing**:

**Current Pattern (RouteConfig.cs or Global.asax.cs)**:
```csharp
using System.Web.Mvc;
using System.Web.Routing;

public class RouteConfig
{
    public static void RegisterRoutes(RouteCollection routes)
    {
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

        routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
        );
    }
}
```

**Target Pattern (Program.cs)**:
```csharp
// In Program.cs, after middleware pipeline setup:

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// For additional routes:
app.MapControllerRoute(
    name: "custom",
    pattern: "custom/{action}/{id?}",
    defaults: new { controller = "Custom" });
```

**Changes**:
- `RouteCollection.MapRoute` ? `app.MapControllerRoute` (on `WebApplication` instance)
- `url` parameter ? `pattern` parameter
- `defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }` ? `pattern: "{controller=Home}/{action=Index}/{id?}"`
- Default values specified inline in pattern using `=` syntax
- Optional parameters use `?` suffix instead of `UrlParameter.Optional`
- `IgnoreRoute` not needed for `.axd` files (irrelevant in ASP.NET Core)

**Actions**:
1. **Identify all routes** in current application (check RouteConfig.cs, Global.asax.cs, or other route registration locations)
2. **Map each route** to ASP.NET Core endpoint routing in Program.cs
3. **Update route patterns** to use inline defaults and optional syntax
4. **Remove RouteConfig.cs** (routing now in Program.cs)
5. **Test all routes** after migration

---

##### Step 8: Configuration Migration

**Migrate web.config to appsettings.json**:

ASP.NET Framework uses `web.config` for configuration. ASP.NET Core uses `appsettings.json` for application settings.

**Actions**:
1. **Create appsettings.json** in project root
2. **Migrate app settings** from `<appSettings>` section in web.config
3. **Migrate connection strings** from `<connectionStrings>` section
4. **Update configuration access** in code:

**Current**:
```csharp
string value = ConfigurationManager.AppSettings["key"];
string connStr = ConfigurationManager.ConnectionStrings["name"].ConnectionString;
```

**Target**:
```csharp
// Inject IConfiguration in constructor
public class MyController : Controller
{
    private readonly IConfiguration _configuration;

    public MyController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IActionResult Index()
    {
        string value = _configuration["key"];
        string connStr = _configuration.GetConnectionString("name");
        // ...
    }
}
```

**appsettings.json Structure**:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AppSettings": {
    "key": "value"
  },
  "ConnectionStrings": {
    "name": "connection string value"
  }
}
```

**Note**: Some web.config sections (like `<system.web>`, `<system.webServer>`) are IIS-specific and not needed for ASP.NET Core (unless hosting in IIS with in-process model).

---

##### Step 9: Code Modifications Summary

**Files to Modify** (based on assessment):

The assessment indicates **6 files with issues** out of 7 code files. Expected modifications:

1. **Controllers** (multiple files likely):
   - Update namespace: `using System.Web.Mvc` ? `using Microsoft.AspNetCore.Mvc`
   - Update `JsonResult` calls to remove `JsonRequestBehavior`
   - Update `Request`/`Response` property access
   - Update HTTP attributes namespace

2. **Global.asax.cs**:
   - Content migrated to Program.cs
   - File deleted after migration

3. **RouteConfig.cs** (if exists):
   - Content migrated to Program.cs routing configuration
   - File deleted after migration

4. **Configuration access** (any file using ConfigurationManager):
   - Replace with `IConfiguration` dependency injection
   - Update access patterns

5. **JSON serialization** (any file using JavaScriptSerializer):
   - Replace with `System.Text.Json` or `Newtonsoft.Json`

6. **WebSocket handling** (if present):
   - Update to ASP.NET Core WebSocket API

**New Files to Create**:
1. **Program.cs** - Application entry point and configuration
2. **appsettings.json** - Application settings
3. **appsettings.Development.json** (optional) - Development-specific settings

**Files to Remove**:
1. **Global.asax**
2. **Global.asax.cs**
3. **RouteConfig.cs** (if exists)
4. **web.config** (mostly - may keep minimal version for IIS hosting)

---

##### Step 10: Build and Compilation

**Resolve Compilation Errors**:

After making all changes, build the solution:

```bash
dotnet build ContosoConf.csproj
```

**Expected Compilation Issues**:
- Missing namespace references ? Add `using` statements
- Type mismatches ? Update to ASP.NET Core types
- Method signature differences ? Update method calls
- Property access changes ? Update property usage

**Process**:
1. Build project
2. Review compilation errors
3. Fix errors systematically (group by type/file)
4. Reference breaking changes catalog (Step 5) for fixes
5. Rebuild until 0 errors

**Compiler as Checklist**: Use compilation errors to identify all locations requiring updates.

---

##### Step 11: Testing Strategy

**Unit Testing** (if unit tests exist):
- Run unit tests: `dotnet test`
- Fix failing tests due to API changes
- Verify test coverage maintained

**Manual Testing Checklist**:
- [ ] Application starts successfully
- [ ] Home page loads
- [ ] All controllers accessible
- [ ] All actions execute correctly
- [ ] JSON endpoints return data correctly
- [ ] Form submissions work (if applicable)
- [ ] ModelState validation works correctly
- [ ] Redirects work as expected
- [ ] Error handling works (try invalid routes, bad requests)
- [ ] WebSocket functionality works (if present)
- [ ] Static files served correctly (CSS, JS, images)
- [ ] Routing matches expected patterns

**Integration Testing**:
- Test full user workflows end-to-end
- Verify data flows correctly
- Validate application behavior matches pre-migration

**Performance Testing**:
- Monitor startup time
- Check response times for key endpoints
- Compare to baseline if available

---

##### Step 12: Validation Checklist

**Technical Validation**:
- [ ] Project is SDK-style format
- [ ] Target framework is net10.0
- [ ] All incompatible packages removed
- [ ] Solution builds with 0 errors
- [ ] Solution builds with 0 warnings (or acceptable warnings documented)
- [ ] Application starts without errors
- [ ] No API compatibility issues remain
- [ ] All controllers and actions accessible

**Functional Validation**:
- [ ] All existing features work correctly
- [ ] User workflows complete successfully
- [ ] Data validation works
- [ ] Error handling appropriate
- [ ] Performance acceptable

**Code Quality Validation**:
- [ ] No commented-out legacy code remains
- [ ] Unused using statements removed
- [ ] Code follows ASP.NET Core patterns/conventions
- [ ] Configuration properly externalized

**Documentation Validation**:
- [ ] Breaking changes documented
- [ ] Configuration changes documented
- [ ] Deployment changes documented (if applicable)

---

## Risk Management

### High-Risk Changes

| Project | Risk Level | Description | Mitigation Strategy |
|---------|-----------|-------------|---------------------|
| ContosoConf.csproj | ?? High | ASP.NET Framework ? ASP.NET Core architectural migration with 67 API compatibility issues | Comprehensive API mapping, step-by-step validation, ASP.NET Core migration guides, thorough testing |
| ContosoConf.csproj | ?? Medium | SDK-style project conversion from classic format | Use .NET Upgrade Assistant or manual conversion with validation, preserve all necessary project settings |
| ContosoConf.csproj | ?? Medium | Application lifecycle migration (Global.asax ? Program.cs) | Follow ASP.NET Core startup patterns, migrate application events systematically |
| ContosoConf.csproj | ?? Medium | Routing migration (RouteCollection ? Endpoint Routing) | Map existing routes to ASP.NET Core routing patterns, validate all routes post-migration |

### Risk Assessment by Category

#### Technical Risks

**1. API Compatibility (High Risk)**
- **Issue**: 58 binary incompatible APIs, 8 source incompatible APIs, 1 behavioral change
- **Impact**: Code will not compile or run correctly without modifications
- **Mitigation**:
  - Use detailed API migration mapping for System.Web.Mvc ? Microsoft.AspNetCore.Mvc
  - Leverage compiler errors as checklist for required changes
  - Reference official ASP.NET Core migration documentation
  - Test each controller/action after migration

**2. Architectural Paradigm Shift (High Risk)**
- **Issue**: ASP.NET Framework and ASP.NET Core have fundamentally different architectures
- **Impact**: Application initialization, middleware pipeline, dependency injection, request lifecycle all differ
- **Mitigation**:
  - Follow proven ASP.NET Core migration patterns
  - Convert Global.asax initialization to Program.cs with minimal/WebApplication builder
  - Implement ASP.NET Core middleware pipeline correctly
  - Update dependency injection to use built-in ASP.NET Core container

**3. Project File Conversion (Medium Risk)**
- **Issue**: Classic .csproj format incompatible with .NET 10.0
- **Impact**: Project won't load or build with new SDK
- **Mitigation**:
  - Use .NET Upgrade Assistant or manual SDK-style conversion
  - Verify all project properties preserved (output type, assembly name, etc.)
  - Test project loads and restores correctly after conversion

**4. Runtime Behavior Changes (Low-Medium Risk)**
- **Issue**: 1 behavioral change identified (System.Uri)
- **Impact**: Subtle runtime behavior differences may cause unexpected issues
- **Mitigation**:
  - Review behavioral change documentation
  - Add specific tests for affected areas
  - Monitor runtime behavior during testing phase

#### Process Risks

**1. Testing Coverage (Medium Risk)**
- **Issue**: Assessment doesn't indicate existing test coverage level
- **Impact**: May miss functional regressions during migration
- **Mitigation**:
  - Perform manual smoke testing of all application features
  - Test all controllers, views, and routes
  - Validate WebSocket functionality if present
  - Consider adding automated tests during migration

**2. Hidden Dependencies (Low-Medium Risk)**
- **Issue**: Runtime dependencies or configurations not visible in static analysis
- **Impact**: Application may fail at runtime despite successful build
- **Mitigation**:
  - Review all configuration files (web.config ? appsettings.json)
  - Check for dynamic assembly loading or reflection-based dependencies
  - Test full application workflow end-to-end

### Security Considerations

**Current Status**: ? No security vulnerabilities identified in current NuGet packages

**Post-Migration**:
- .NET 10.0 includes latest security updates
- ASP.NET Core provides modern security features (built-in anti-forgery, CORS, authentication middleware)
- Ensure security middleware properly configured in ASP.NET Core pipeline

### Contingency Plans

#### If Project Conversion Fails
- **Alternative**: Manual SDK-style project file creation
- **Action**: Create new SDK-style project, migrate files manually, copy necessary settings from old project

#### If API Migration Proves More Complex Than Expected
- **Alternative**: Consider System.Web.Adapters package for compatibility layer
- **Action**: Evaluate effort of using adapters vs completing full migration, document trade-offs

#### If Application Behavior Differs Post-Migration
- **Alternative**: Detailed comparison testing
- **Action**: Set up side-by-side testing environment, compare outputs/behaviors, adjust ASP.NET Core implementation

#### If Performance Issues Arise
- **Alternative**: Performance profiling and optimization
- **Action**: Use .NET profiling tools, identify bottlenecks, optimize ASP.NET Core middleware pipeline

### Rollback Strategy

**Single Project Rollback**:
- All changes occur on `dotnet10` branch (no branch change per user request)
- Rollback via git reset or revert commits
- No downstream projects affected
- Low rollback complexity

**Rollback Triggers**:
- Unable to resolve API compatibility issues after reasonable effort
- Critical functionality cannot be replicated in ASP.NET Core
- Performance degradation cannot be resolved
- Business decision to pause migration

---

## Testing & Validation Strategy

### Multi-Level Testing Approach

This migration requires comprehensive testing due to the significant architectural changes from ASP.NET Framework to ASP.NET Core.

---

### Level 1: Compilation Validation

**Objective**: Ensure project compiles successfully with .NET 10.0 and ASP.NET Core

**Process**:
1. Build solution: `dotnet build ContosoConf.csproj`
2. Address all compilation errors
3. Review and address warnings
4. Verify successful compilation

**Success Criteria**:
- [ ] Solution builds with 0 errors
- [ ] Zero or minimal warnings (document any acceptable warnings)
- [ ] All API compatibility issues resolved

---

### Level 2: Project-Level Testing

**Objective**: Validate ContosoConf.csproj after migration

**Smoke Tests** (Quick validation after migration):
- [ ] Project loads in IDE successfully
- [ ] Application starts without errors
- [ ] Home page accessible (default route)
- [ ] At least one controller action executes
- [ ] Static files served (CSS, JS)

**Unit Tests** (if unit tests exist):
- [ ] All unit tests execute
- [ ] Unit test pass rate maintained or improved
- [ ] Update tests for API changes if needed

**Controller Testing**:
For each controller in the project:
- [ ] Controller instantiates correctly
- [ ] All actions accessible
- [ ] Action results return correctly (ViewResult, JsonResult, RedirectResult)
- [ ] Model binding works
- [ ] ModelState validation functions correctly

**Example Controllers to Test** (identify from codebase):
- HomeController
- [Other controllers identified in project]

---

### Level 3: Functional Validation

**Objective**: Ensure all application functionality works correctly

**Routing Validation**:
- [ ] Default route works (`/` ? default controller/action)
- [ ] Controller routes work (`/Controller/Action`)
- [ ] Route parameters work (`/Controller/Action/Id`)
- [ ] Custom routes function (if any defined)

**HTTP Methods**:
- [ ] GET requests work
- [ ] POST requests work (if applicable)
- [ ] Other HTTP methods function correctly (PUT, DELETE, if used)

**Request/Response Testing**:
- [ ] Request properties accessible (Headers, QueryString, Form data)
- [ ] Response manipulation works (StatusCode, Headers, Redirects)
- [ ] Content negotiation functions (JSON, HTML)

**JSON Endpoints**:
- [ ] JSON serialization produces correct output
- [ ] JSON deserialization parses input correctly
- [ ] Previous `JsonRequestBehavior.AllowGet` removal doesn't break GET requests

**WebSocket Functionality** (if present):
- [ ] WebSocket requests detected correctly
- [ ] WebSocket connections established
- [ ] WebSocket messages sent/received
- [ ] WebSocket cleanup occurs properly

---

### Level 4: Integration Testing

**Objective**: Validate end-to-end application workflows

**User Workflows**:
Identify and test complete user scenarios:
- [ ] Browse site, navigate between pages
- [ ] Submit forms (if applicable)
- [ ] View data listings
- [ ] [Other workflows specific to ContosoConf application]

**Configuration Integration**:
- [ ] Application settings loaded from appsettings.json
- [ ] Connection strings accessible (if database used)
- [ ] Environment-specific configuration works (Development/Production)

**Dependency Injection**:
- [ ] Services resolve correctly
- [ ] Controller dependencies injected properly
- [ ] Scoped/Transient/Singleton lifetimes correct

**Middleware Pipeline**:
- [ ] Static files middleware serves files
- [ ] Routing middleware routes requests
- [ ] Authorization middleware enforces policies (if applicable)
- [ ] Error handling middleware catches exceptions

---

### Level 5: Behavioral Testing

**Objective**: Identify any behavioral differences between .NET Framework and .NET 10.0

**Known Behavioral Changes**:
- **System.Uri**: The assessment identified a behavioral change
  - [ ] Test URL parsing and formatting
  - [ ] Validate `Request.Url` replacement (`Request.GetDisplayUrl()`, etc.)
  - [ ] Verify route generation produces correct URLs

**Runtime Behavior Comparison**:
- [ ] Compare outputs between old and new versions (if possible)
- [ ] Test edge cases and boundary conditions
- [ ] Validate error messages and exception handling

**Performance Validation**:
- [ ] Measure application startup time
- [ ] Check response times for key endpoints
- [ ] Compare to baseline performance (if available)
- [ ] Identify any performance regressions

---

### Level 6: Error Scenario Testing

**Objective**: Ensure error handling and edge cases work correctly

**Error Cases to Test**:
- [ ] Invalid routes (404 Not Found)
- [ ] Invalid model data (validation errors)
- [ ] Server errors (500 Internal Server Error)
- [ ] Unauthorized access (if authentication/authorization used)
- [ ] Malformed requests

**ModelState Validation**:
- [ ] Invalid data rejected
- [ ] Validation errors returned to client
- [ ] Error messages clear and helpful

---

### Testing Execution Plan

**Phase 1: Immediate Post-Migration**
1. Compilation validation
2. Smoke tests
3. Unit tests (if applicable)

**Phase 2: Functional Testing**
1. Routing validation
2. Controller and action testing
3. JSON endpoint testing
4. WebSocket testing (if applicable)

**Phase 3: Integration Testing**
1. End-to-end workflow testing
2. Configuration and DI validation
3. Middleware pipeline testing

**Phase 4: Regression & Behavioral Testing**
1. Behavioral change validation
2. Performance testing
3. Error scenario testing

---

### Test Environment

**Development Environment**:
- .NET 10.0 SDK installed
- Visual Studio 2022 or later
- Test with `dotnet run` and IDE debugging

**Testing Tools**:
- Browser for manual UI testing
- Postman/curl for API endpoint testing
- Browser developer tools for network inspection
- Visual Studio debugger for troubleshooting

---

### Test Documentation

**Document Test Results**:
- Record test pass/fail status
- Note any issues discovered
- Document workarounds or fixes applied
- Track any deferred issues

**Test Report Template**:
```
Test Level: [Compilation/Smoke/Unit/Functional/Integration/Behavioral]
Date: [Date]
Tester: [Name]
Status: [Pass/Fail/Partial]

Tests Executed:
- [Test 1]: [Pass/Fail] - [Notes]
- [Test 2]: [Pass/Fail] - [Notes]

Issues Found:
- [Issue description] - [Resolution]

Overall Assessment: [Summary]
```

---

### Acceptance Criteria for Testing Complete

Migration testing is complete when:
- [ ] All test levels executed
- [ ] All critical functionality validated
- [ ] Known issues documented and accepted/resolved
- [ ] Performance acceptable
- [ ] No blocking issues remain

---

## Complexity & Effort Assessment

### Project Complexity Rating

| Project | Complexity | Dependencies | Risk | Rationale |
|---------|-----------|--------------|------|-----------|
| ContosoConf.csproj | ?? High | 0 project deps | ?? High | ASP.NET Framework ? ASP.NET Core migration, 67 API issues, architectural paradigm shift, SDK-style conversion required |

### Complexity Factors

**ContosoConf.csproj - High Complexity**:

**Structural Factors**:
- Classic project format requires SDK-style conversion
- 561 total LOC, 67+ lines require modification (11.9%)
- 7 code files with 6 files containing issues
- 87 total files in project

**API Migration Factors**:
- 58 binary incompatible APIs (high-impact code changes required)
- 8 source incompatible APIs (recompilation and potential conflicts)
- 1 behavioral change (runtime testing required)
- 98.5% of issues from System.Web (ASP.NET Framework) APIs

**Architectural Migration Factors**:
- Application initialization: Global.asax ? Program.cs/Startup.cs
- Routing: System.Web.Routing.RouteCollection ? ASP.NET Core endpoint routing
- Controllers: System.Web.Mvc.Controller ? Microsoft.AspNetCore.Mvc.Controller
- Action results: System.Web.Mvc.ActionResult types ? ASP.NET Core equivalents
- Request/Response: HttpContext/HttpRequestBase/HttpResponseBase ? ASP.NET Core types
- Dependency injection: Manual ? ASP.NET Core built-in DI
- Middleware: No pipeline ? ASP.NET Core middleware pipeline

**Technology-Specific Factors**:
- WebSocket support: System.Web.WebSockets ? ASP.NET Core WebSockets
- JSON serialization: JavaScriptSerializer ? System.Text.Json or Newtonsoft.Json
- Model binding: ASP.NET MVC ? ASP.NET Core MVC (different patterns)

### Phase Complexity Assessment

#### Phase 1: Atomic Migration

**Overall Phase Complexity**: ?? High

**Component Breakdown**:

1. **Project File Conversion** - Medium Complexity
   - Convert classic .csproj to SDK-style format
   - Preserve necessary project settings
   - Update output type, assembly name, namespace

2. **Framework and Package Update** - Low Complexity
   - Update TargetFramework property
   - Remove incompatible NuGet packages
   - Add ASP.NET Core framework reference (implicit)

3. **Application Architecture Migration** - High Complexity
   - Convert Global.asax to Program.cs
   - Implement ASP.NET Core startup configuration
   - Set up middleware pipeline
   - Configure services and dependency injection

4. **Controller Migration** - High Complexity
   - Update controller base classes
   - Migrate action result types (JsonResult, ViewResult, RedirectResult, etc.)
   - Update ModelState usage patterns
   - Fix Request/Response property access

5. **Routing Migration** - Medium-High Complexity
   - Convert RouteCollection registration to endpoint routing
   - Map existing routes to ASP.NET Core patterns
   - Validate route parameter handling

6. **API Compatibility Fixes** - High Complexity
   - Address 67 API issues across 6 code files
   - Update System.Web.Mvc types to Microsoft.AspNetCore.Mvc
   - Migrate JSON serialization
   - Update WebSocket implementation if present

7. **Build and Validation** - Medium Complexity
   - Resolve compilation errors
   - Fix warnings
   - Run full application testing

**Critical Path Items** (highest complexity/risk):
1. Application architecture migration (Global.asax ? Program.cs)
2. Controller and action result migrations (58 binary incompatible APIs)
3. Routing migration (RouteCollection ? endpoint routing)

### Resource Requirements

**Skills Required**:
- Strong understanding of ASP.NET Framework MVC architecture
- Strong understanding of ASP.NET Core architecture and patterns
- Experience with .NET project file formats (classic and SDK-style)
- Familiarity with ASP.NET Core middleware pipeline
- Knowledge of ASP.NET Core dependency injection
- Understanding of endpoint routing in ASP.NET Core

**Parallel Work Capacity**:
- Not applicable (single project, sequential operations required)
- All work must be completed in sequence within single project

**Knowledge Resources Needed**:
- ASP.NET Core migration documentation (Microsoft Docs)
- System.Web.Mvc ? Microsoft.AspNetCore.Mvc API mapping guides
- .NET 10.0 breaking changes documentation
- ASP.NET Core routing documentation
- SDK-style project format reference

### Effort Indicators

**Relative Effort**: High

This migration represents significant effort due to:
- Complete architectural paradigm shift (not just framework version update)
- Large number of API compatibility issues requiring manual code changes
- Multiple interconnected migration tasks (project format, framework, architecture, APIs)
- Testing and validation across entire application

**Complexity Drivers** (in order of impact):
1. ASP.NET Framework ? ASP.NET Core architectural differences
2. Volume of binary incompatible APIs (58 instances)
3. Application lifecycle and routing system changes
4. SDK-style project conversion requirements

**Effort Distribution**:
- Project setup and conversion: ~10% of effort
- API compatibility fixes: ~40% of effort
- Application architecture migration: ~30% of effort
- Testing and validation: ~20% of effort

---

## Source Control Strategy

### Branching Strategy

**Current Branch**: `dotnet10` (per user request, no branch change)

**Branch Structure**:
- **Source Branch**: `dotnet10` - Starting point for migration
- **Working Branch**: `dotnet10` - All migration changes committed here
- **Merge Target**: Not specified (user can merge to main/master when ready)

**Rationale**: User requested to stay on current branch for entire migration process.

---

### Commit Strategy

**Approach**: Single atomic commit with all migration changes

**All-At-Once Commit Structure**:

Since this is an All-At-Once migration of a single project, all changes should be committed together as a single logical unit. This creates a clear, atomic migration point in history.

**Recommended Commit Message**:
```
Migrate ContosoConf to .NET 10.0 and ASP.NET Core

- Convert project to SDK-style format
- Update target framework from net48 to net10.0
- Remove incompatible ASP.NET Framework packages
- Migrate from System.Web.Mvc to Microsoft.AspNetCore.Mvc
- Convert Global.asax to Program.cs with ASP.NET Core startup
- Migrate RouteCollection to ASP.NET Core endpoint routing
- Update all controllers and action results for ASP.NET Core
- Replace JavaScriptSerializer with System.Text.Json
- Update WebSocket implementation for ASP.NET Core (if applicable)
- Migrate configuration from web.config to appsettings.json
- Fix 67 API compatibility issues

Breaking Changes:
- ASP.NET Framework MVC ? ASP.NET Core MVC
- All System.Web.* APIs replaced with ASP.NET Core equivalents
- Application initialization moved from Global.asax to Program.cs
- Routing changed from RouteCollection to endpoint routing

Files Added:
- Program.cs
- appsettings.json

Files Removed:
- Global.asax
- Global.asax.cs
- RouteConfig.cs (if existed)

Resolves: .NET Framework 4.8 ? .NET 10.0 migration
```

---

### Alternative: Incremental Commits (If Preferred)

If you prefer to track intermediate steps, consider this commit sequence:

**Commit 1**: Project conversion
```
Convert ContosoConf to SDK-style project

- Convert classic .csproj to SDK-style format
- Preserve project properties (AssemblyName, RootNamespace)
- Verify project loads and builds
```

**Commit 2**: Framework and package updates
```
Update target framework to .NET 10.0

- Change TargetFramework from net48 to net10.0
- Remove incompatible ASP.NET Framework packages
- Framework now provides ASP.NET Core MVC functionality
```

**Commit 3**: Application architecture migration
```
Migrate application initialization to ASP.NET Core

- Create Program.cs with ASP.NET Core startup
- Configure middleware pipeline
- Set up dependency injection
- Migrate routing to endpoint routing
- Remove Global.asax and RouteConfig
```

**Commit 4**: API compatibility fixes
```
Fix API compatibility for ASP.NET Core

- Update all controller namespaces to Microsoft.AspNetCore.Mvc
- Fix JsonResult calls (remove JsonRequestBehavior)
- Update Request/Response property access
- Replace JavaScriptSerializer with System.Text.Json
- Update WebSocket implementation
- Fix all 67 API compatibility issues
```

**Commit 5**: Configuration migration
```
Migrate configuration to appsettings.json

- Create appsettings.json
- Migrate app settings from web.config
- Update configuration access to use IConfiguration
```

**Commit 6**: Testing and cleanup
```
Final cleanup and validation

- Remove commented-out code
- Remove unused using statements
- Fix build warnings
- Validate all tests pass
```

---

### Commit Best Practices

**Before Committing**:
- [ ] Solution builds with 0 errors
- [ ] All tests pass (or document failing tests)
- [ ] Code reviewed for quality
- [ ] No debug code or temporary changes remain
- [ ] Commit message describes changes clearly

**Commit Message Format**:
- **Subject line**: Brief summary (50-72 characters)
- **Body**: Detailed description of changes
- **Breaking changes**: List any breaking changes
- **Resolves**: Reference issue/work item if applicable

---

### Review and Merge Process

**Pull Request Requirements** (if using PR workflow):

**PR Title**: "Migrate ContosoConf to .NET 10.0 and ASP.NET Core"

**PR Description Template**:
```markdown
## Summary
Migrates ContosoConf project from .NET Framework 4.8 to .NET 10.0, including full ASP.NET MVC to ASP.NET Core conversion.

## Changes
- Converted project to SDK-style format
- Updated target framework to net10.0
- Migrated from System.Web.Mvc to Microsoft.AspNetCore.Mvc
- Converted application initialization from Global.asax to Program.cs
- Updated routing to ASP.NET Core endpoint routing
- Fixed 67 API compatibility issues
- Migrated configuration to appsettings.json

## Testing
- [x] Solution builds successfully
- [x] All controllers and actions functional
- [x] Routing works correctly
- [x] JSON endpoints return data correctly
- [x] Application starts and runs without errors
- [x] [List other tests performed]

## Breaking Changes
- ASP.NET Framework ? ASP.NET Core (major architectural change)
- All System.Web.* APIs replaced
- Configuration moved from web.config to appsettings.json
- Application initialization completely redesigned

## Migration Risks
- High complexity migration (ASP.NET Framework ? Core)
- Extensive API compatibility changes
- Requires .NET 10.0 SDK for all developers
- Deployment process may need updates for ASP.NET Core hosting

## Rollback Plan
Revert this PR/commit to return to .NET Framework 4.8 version on dotnet10 branch.

## Checklist
- [x] Code builds without errors
- [x] Tests pass
- [x] Documentation updated (if applicable)
- [x] Breaking changes documented
- [x] Ready for review
```

**Review Checklist** (for reviewer):
- [ ] Project structure correct (SDK-style)
- [ ] Target framework set to net10.0
- [ ] All API compatibility issues resolved
- [ ] Program.cs startup configuration appropriate
- [ ] Routing configuration correct
- [ ] Controllers properly migrated
- [ ] Configuration migration complete
- [ ] Code quality maintained
- [ ] Tests pass
- [ ] No obvious issues or code smells

**Merge Criteria**:
- [ ] All review comments addressed
- [ ] CI/CD pipeline passes (if applicable)
- [ ] Required approvals obtained
- [ ] No merge conflicts
- [ ] All tests passing

---

### Post-Merge Activities

**After Merging**:
1. **Notify team** of migration completion
2. **Update documentation** (README, wiki, deployment guides)
3. **Update CI/CD pipelines** for .NET 10.0 and ASP.NET Core
4. **Update development environment setup** instructions
5. **Document any deployment changes** required for ASP.NET Core hosting

**Team Communication**:
- Announce migration complete
- Share any known issues or limitations
- Provide guidance for local environment updates
- Schedule knowledge sharing session if needed

---

### Version Tagging

**Recommended Tags**:
- Tag before migration: `pre-dotnet10-migration` or `dotnet48-final`
- Tag after migration: `dotnet10-migration-complete` or `v2.0.0` (if using semantic versioning)

**Tagging Commands**:
```bash
# Before migration starts
git tag -a pre-dotnet10-migration -m "ContosoConf on .NET Framework 4.8 before migration"

# After migration completes
git tag -a dotnet10-migration-complete -m "ContosoConf migrated to .NET 10.0 and ASP.NET Core"

# Push tags
git push origin --tags
```

---

### Backup and Recovery

**Before Migration Starts**:
- Ensure current state committed and pushed
- Create backup tag (see above)
- Document current environment state

**If Rollback Needed**:
```bash
# Option 1: Hard reset to pre-migration state
git reset --hard pre-dotnet10-migration

# Option 2: Revert commits
git revert <migration-commit-hash>

# Option 3: Restore from tag
git checkout pre-dotnet10-migration -b dotnet10-rollback
```

---

### Source Control Discipline

**During Migration**:
- Commit frequently if using incremental commits (save progress)
- Write clear commit messages
- Don't commit broken/non-compiling code (unless WIP commit explicitly noted)
- Use `.gitignore` to exclude build artifacts, bin/obj folders

**After Migration**:
- Keep branch clean (no unnecessary commits)
- Squash commits if history too granular (optional)
- Ensure commit history tells clear migration story

---

## Success Criteria

### Technical Criteria

Migration is technically successful when all of the following are met:

#### Project Structure
- [ ] **SDK-Style Project**: ContosoConf.csproj converted to SDK-style format
- [ ] **Target Framework**: TargetFramework property set to `net10.0`
- [ ] **Project Loads**: Project loads successfully in Visual Studio 2022 or later

#### Dependencies
- [ ] **Packages Removed**: All ASP.NET Framework packages removed (Microsoft.AspNet.Mvc, Microsoft.AspNet.Razor, Microsoft.AspNet.WebPages, Microsoft.Web.Infrastructure)
- [ ] **Framework Reference**: ASP.NET Core MVC functionality available via framework reference
- [ ] **No Dependency Conflicts**: Package restore completes without errors or warnings

#### Compilation
- [ ] **Zero Build Errors**: Solution builds with 0 errors
- [ ] **Zero Build Warnings**: Solution builds with 0 warnings (or acceptable warnings documented and justified)
- [ ] **API Issues Resolved**: All 67 API compatibility issues addressed
  - All 58 binary incompatible API usages fixed
  - All 8 source incompatible API usages fixed
  - 1 behavioral change (System.Uri) validated
- [ ] **Clean Compilation**: No obsolete API warnings, no deprecation warnings

#### Application Architecture
- [ ] **ASP.NET Core Startup**: Program.cs created with proper ASP.NET Core configuration
- [ ] **Middleware Pipeline**: Middleware configured correctly (static files, routing, authorization, etc.)
- [ ] **Dependency Injection**: Services registered and resolving correctly
- [ ] **Endpoint Routing**: Routes migrated from RouteCollection to ASP.NET Core endpoint routing
- [ ] **Legacy Files Removed**: Global.asax, Global.asax.cs, RouteConfig.cs removed (if existed)

#### Code Quality
- [ ] **Namespace Updates**: All `using System.Web.Mvc` ? `using Microsoft.AspNetCore.Mvc`
- [ ] **Controller Updates**: All controllers inherit from `Microsoft.AspNetCore.Mvc.Controller`
- [ ] **Action Results**: All action results updated (JsonResult, ViewResult, RedirectResult, etc.)
- [ ] **Request/Response**: All Request/Response access updated for ASP.NET Core
- [ ] **JSON Serialization**: JavaScriptSerializer replaced with System.Text.Json or Newtonsoft.Json
- [ ] **WebSocket Implementation**: WebSocket code updated to ASP.NET Core API (if applicable)
- [ ] **Configuration Access**: ConfigurationManager replaced with IConfiguration dependency injection
- [ ] **No Legacy Code**: No commented-out or unused legacy ASP.NET Framework code remains

---

### Functional Criteria

Migration is functionally successful when application behavior is preserved:

#### Application Startup
- [ ] **Application Starts**: Application starts without errors or exceptions
- [ ] **Startup Time**: Startup time acceptable (no significant regression)
- [ ] **Configuration Loaded**: Application settings and connection strings load correctly from appsettings.json

#### Routing and Navigation
- [ ] **Default Route Works**: Home page loads via default route
- [ ] **All Routes Accessible**: All controllers and actions accessible via routes
- [ ] **Route Parameters Work**: Route parameters parsed correctly
- [ ] **URL Generation**: URL generation produces correct links

#### Controllers and Actions
- [ ] **All Controllers Work**: All controllers instantiate and execute
- [ ] **All Actions Work**: All action methods execute without errors
- [ ] **Action Results Correct**: ViewResult, JsonResult, RedirectResult, etc. return appropriate responses
- [ ] **Model Binding Works**: Model binding from request data functions correctly
- [ ] **ModelState Validation**: ModelState validation operates as expected

#### Content and Responses
- [ ] **Views Render**: All views render correctly (if using Razor views)
- [ ] **JSON Responses**: JSON endpoints return properly formatted data
- [ ] **Static Files Served**: CSS, JavaScript, images served correctly
- [ ] **HTTP Status Codes**: Correct status codes returned (200, 404, 500, etc.)

#### Advanced Features
- [ ] **WebSocket Functionality**: WebSocket connections work (if application uses WebSockets)
- [ ] **Error Handling**: Errors handled gracefully, appropriate error pages/responses
- [ ] **Authorization**: Authentication/authorization functions correctly (if applicable)

---

### Quality Criteria

Migration maintains or improves code quality:

#### Code Standards
- [ ] **Consistent Patterns**: Code follows ASP.NET Core patterns and conventions
- [ ] **Clean Code**: No unnecessary using statements, no unused variables
- [ ] **Proper DI Usage**: Dependency injection used correctly throughout
- [ ] **Configuration Externalized**: Settings properly externalized in appsettings.json

#### Testing
- [ ] **Unit Tests Pass**: All unit tests pass (if unit tests exist)
- [ ] **Integration Tests Pass**: Integration tests pass (if exist)
- [ ] **Manual Testing Complete**: Manual testing checklist completed
- [ ] **Smoke Tests Pass**: Basic functionality validated

#### Security
- [ ] **No Vulnerabilities**: No security vulnerabilities in dependencies
- [ ] **Secure Practices**: ASP.NET Core security middleware properly configured
- [ ] **No Exposed Secrets**: No hardcoded secrets, connection strings, or sensitive data

#### Performance
- [ ] **Performance Acceptable**: Response times acceptable for key endpoints
- [ ] **No Significant Regression**: Performance comparable to or better than .NET Framework version
- [ ] **Resource Usage**: Memory and CPU usage appropriate

---

### Process Criteria

Migration follows established process and strategy:

#### All-At-Once Strategy Applied
- [ ] **Atomic Migration**: All changes applied in single coordinated operation
- [ ] **No Intermediate States**: No partial migration or multi-targeting states
- [ ] **Single Project Migration**: ContosoConf.csproj fully migrated
- [ ] **All-At-Once Principles**: Strategy principles followed throughout

#### Documentation
- [ ] **Plan Followed**: Migration plan (this document) followed systematically
- [ ] **Changes Documented**: All breaking changes documented
- [ ] **Issues Tracked**: Any issues or deviations documented
- [ ] **Lessons Learned**: Lessons learned captured for future migrations

#### Source Control
- [ ] **Changes Committed**: All changes committed to `dotnet10` branch
- [ ] **Commit Messages Clear**: Commit messages descriptive and informative
- [ ] **No Uncommitted Changes**: No uncommitted or stashed changes remain
- [ ] **Source Control Strategy Followed**: Commit strategy from plan followed

#### Review and Validation
- [ ] **Code Reviewed**: Code changes reviewed (self-review or peer review)
- [ ] **Testing Completed**: All testing levels completed
- [ ] **Validation Checklist**: Project-specific validation checklist completed (see Step 12 in project plan)

---

### Acceptance Criteria Summary

**Migration is COMPLETE and SUCCESSFUL when**:

? **Technical Success**:
- Project builds with 0 errors and 0 warnings
- All 67 API issues resolved
- Application runs on .NET 10.0 and ASP.NET Core

? **Functional Success**:
- All existing functionality works correctly
- No functional regressions
- Application behavior matches expectations

? **Quality Success**:
- Code quality maintained or improved
- Tests pass
- Security and performance acceptable

? **Process Success**:
- All-At-Once strategy followed
- Documentation complete
- Source control discipline maintained

---

### Definition of Done

The ContosoConf .NET Framework 4.8 to .NET 10.0 migration is **DONE** when:

1. ? All technical criteria met
2. ? All functional criteria met
3. ? All quality criteria met
4. ? All process criteria met
5. ? Stakeholders accept migration as complete
6. ? Application ready for deployment (if applicable)

---

### Post-Migration Validation

After declaring migration complete, validate:

- [ ] **Production Deployment Ready**: Migration changes deployable to production (if applicable)
- [ ] **Team Onboarded**: Development team understands ASP.NET Core changes
- [ ] **CI/CD Updated**: Build and deployment pipelines updated for .NET 10.0
- [ ] **Documentation Updated**: README, deployment guides, architecture docs updated
- [ ] **No Blockers Remain**: No unresolved blocking issues

---

### Sign-Off

**Migration Completed By**: _______________  
**Date**: _______________  
**Validation Status**: [ ] Pass [ ] Fail  
**Notes**: _______________________________________________
