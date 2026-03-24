#!/bin/bash
# Build script for production deployment
# Run this before uploading to cPanel

echo "=========================================="
echo "Building Aspire Portal for Production"
echo "=========================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing main frontend dependencies..."
    npm install
else
    echo "✓ Main frontend dependencies already installed"
fi

# Build main frontend
echo ""
echo "🔨 Building main frontend..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Main frontend built successfully"
else
    echo "❌ Main frontend build failed"
    exit 1
fi

# Build admin frontend
echo ""
echo "🔨 Building admin frontend..."
cd admin-frontend

if [ ! -d "node_modules" ]; then
    echo "📦 Installing admin frontend dependencies..."
    npm install
else
    echo "✓ Admin frontend dependencies already installed"
fi

npm run build

if [ $? -eq 0 ]; then
    echo "✓ Admin frontend built successfully"
else
    echo "❌ Admin frontend build failed"
    exit 1
fi

cd ..

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend

if [ ! -d "vendor" ]; then
    composer install --no-dev --optimize-autoloader
    if [ $? -eq 0 ]; then
        echo "✓ Backend dependencies installed"
    else
        echo "❌ Backend dependencies installation failed"
        exit 1
    fi
else
    echo "✓ Backend dependencies already installed"
fi

cd ..

# Create deployment package
echo ""
echo "📦 Creating deployment package..."

# Create a deployment folder
mkdir -p deployment-package

# Copy built files
echo "Copying files to deployment-package..."
cp -r dist/* deployment-package/
cp -r admin deployment-package/
cp -r backend deployment-package/
cp .htaccess deployment-package/

# Create required directories
mkdir -p deployment-package/uploads
mkdir -p deployment-package/backend/logs

echo ""
echo "=========================================="
echo "✓ Build Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Update backend/config/config.php with your production values"
echo "2. Update backend/config/database.php with your database credentials"
echo "3. Upload contents of 'deployment-package' folder to public_html/"
echo "4. Create database and import database/schema.sql"
echo "5. Run database/admin-user-setup.sql to create admin user"
echo ""
echo "Files ready in: deployment-package/"
echo ""
echo "See CPANEL_DEPLOYMENT_GUIDE.md for detailed instructions"
echo "=========================================="
