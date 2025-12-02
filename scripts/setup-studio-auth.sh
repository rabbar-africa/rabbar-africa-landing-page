#!/bin/bash

# Sanity Studio Authentication Setup Script
echo "🔐 Sanity Studio Authentication Setup"
echo "======================================"
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists"
    read -p "Do you want to update the studio credentials? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi
fi

# Function to generate random password
generate_password() {
    openssl rand -base64 16 | tr -d "=+/" | cut -c1-16
}

echo ""
echo "Choose setup option:"
echo "1. Enter credentials manually"
echo "2. Generate random password"
read -p "Enter choice (1 or 2): " choice

if [ "$choice" = "2" ]; then
    username="admin"
    password=$(generate_password)
    echo ""
    echo "Generated credentials:"
    echo "Username: $username"
    echo "Password: $password"
    echo ""
    echo "⚠️  IMPORTANT: Save these credentials securely!"
    read -p "Press Enter to continue..."
else
    echo ""
    read -p "Enter username (default: admin): " username
    username=${username:-admin}
    
    echo ""
    read -s -p "Enter password: " password
    echo ""
    read -s -p "Confirm password: " password_confirm
    echo ""
    
    if [ "$password" != "$password_confirm" ]; then
        echo "❌ Passwords do not match!"
        exit 1
    fi
    
    if [ ${#password} -lt 8 ]; then
        echo "⚠️  Warning: Password is shorter than 8 characters"
        read -p "Continue anyway? (y/n): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Setup cancelled."
            exit 0
        fi
    fi
fi

# Update or create .env.local
if [ -f .env.local ]; then
    # Remove existing studio auth variables
    grep -v "^STUDIO_USERNAME=" .env.local > .env.local.tmp
    grep -v "^STUDIO_PASSWORD=" .env.local.tmp > .env.local
    rm .env.local.tmp
fi

# Append new credentials
echo "" >> .env.local
echo "# Sanity Studio Authentication" >> .env.local
echo "STUDIO_USERNAME=$username" >> .env.local
echo "STUDIO_PASSWORD=$password" >> .env.local

echo ""
echo "✅ Setup complete!"
echo ""
echo "Your studio credentials have been saved to .env.local"
echo ""
echo "To access the studio:"
echo "1. Start your development server: npm run dev"
echo "2. Navigate to: http://localhost:3000/studio"
echo "3. Use the credentials you just set"
echo ""
echo "📝 See STUDIO_AUTH.md for more information"
