# LabFixup Part 3: Module {MOD}, Exercise {EX} - Test & Update

## Step 1: Test the Solution
Run Mod{MOD}/Labfiles/Solution/Exercise {EX} and verify functionality matches the objectives described in LabGuide/Lab{MOD}.md Exercise {EX}.

Test all interactive features mentioned in the lab (form validation, JavaScript behaviors, styling, etc.).

## Step 2: Update Lab Instructions (if needed)
Review LabGuide/Lab{MOD}.md Exercise {EX} for .NET Framework 4.8-specific steps that need updating for .NET 10:
- Web.config edits → Program.cs configuration
- packages.config → PackageReference or implicit references
- Global.asax → Program.cs startup
- IIS settings → Kestrel defaults

Add notes like "(Note: In .NET 10, this is configured in Program.cs instead of Web.config)" where appropriate.

## Report
- Does the Solution work as expected?
- What instruction updates were made (if any)?
- Any remaining issues?