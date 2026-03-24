@echo off
REM Build script for production deployment (Windows)
REM Run this before uploading to cPanel

echo ==========================================
echo Building Aspire Portal for Production
echo ==========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing main frontend dependencies...
    call npm install
) else (
    echo Main frontend dependencies already installed
)

REM Build main frontend
echo.
echo Building main frontend...
call npm run build

if %errorlevel% neq 0 (
    echo Main frontend build failed
    exit /b 1
)
echo Main frontend built successfully

REM Build admin frontend
echo.
echo Building admin frontend...
cd admin-frontend

if not exist "node_modules" (
    echo Installing admin frontend dependencies...
    call npm install
) else (
    echo Admin frontend dependencies already installed
)

call npm run build

if %errorlevel% neq 0 (
    echo Admin frontend build failed
    exit /b 1
)
echo Admin frontend built successfully

cd ..

REM Install backend dependencies
echo.
echo Installing backend dependencies...
cd backend

if not exist "vendor" (
    call composer install --no-dev --optimize-autoloader
    if %errorlevel% neq 0 (
        echo Backend dependencies installation failed
        exit /b 1
    )
    echo Backend dependencies installed
) else (
    echo Backend dependencies already installed
)

cd ..

REM Create deployment package
echo.
echo Creating deployment package...

REM Create a deployment folder
if not exist "deployment-package" mkdir deployment-package

REM Copy built files
echo Copying files to deployment-package...
xcopy /E /I /Y dist deployment-package
xcopy /E /I /Y admin deployment-package\admin
xcopy /E /I /Y backend deployment-package\backend
copy /Y .htaccess deployment-package\

REM Create required directories
if not exist "deployment-package\uploads" mkdir deployment-package\uploads
if not exist "deployment-package\backend\logs" mkdir deployment-package\backend\logs

echo.
echo ==========================================
echo Build Complete!
echo ==========================================
echo.
echo Next steps:
echo 1. Update backend/config/config.php with your production values
echo 2. Update backend/config/database.php with your database credentials
echo 3. Upload contents of 'deployment-package' folder to public_html/
echo 4. Create database and import database/schema.sql
echo 5. Run database/admin-user-setup.sql to create admin user
echo.
echo Files ready in: deployment-package/
echo.
echo See CPANEL_DEPLOYMENT_GUIDE.md for detailed instructions
echo ==========================================
pause
