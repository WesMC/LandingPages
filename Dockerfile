# NuGet restore
FROM mcr.microsoft.com/dotnet/sdk AS build
WORKDIR /src
COPY *.csproj .
RUN dotnet restore
COPY . .

FROM build AS publish
WORKDIR /src
RUN dotnet publish -c Release -o /src/publish

FROM mcr.microsoft.com/dotnet/aspnet AS runtime
WORKDIR /app
COPY --from=publish /src/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet LandingPages.dll